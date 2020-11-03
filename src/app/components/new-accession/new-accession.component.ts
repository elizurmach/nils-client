import { Component, OnInit, OnChanges, ChangeDetectorRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../../services/data.service';
import { EmphesizeFirstCharecter } from '../../pipes/emphesize-first-charecter.pipe';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Accession } from '../../model/accession';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-new-accession',
  templateUrl: './new-accession.component.html',
  styleUrls: ['./new-accession.component.css']
})
export class NewAccessionComponent implements OnInit, OnChanges {

  public header: string;
  public title: string;
  public subTitle: string;
  public alert: string;
  public tests: Array<string>;
  public pictireManagementOptions: Array<string>;
  public selectedPictureManagementOption: string;
  public resources = environment.resources;
  public accession: Accession;
  public formGroup: FormGroup;

  public allStates: string[];
  public statesFilteredOptions: Observable<string[]>;

  public allCities: string[];
  public citiesFilteredOptions: Observable<string[]>;

  public allPhysicians: string[];
  public referringPhysiciansFilteredOptions: Observable<string[]>;
  public treatingPhysiciansFilteredOptions: Observable<string[]>;

  constructor(private formBuilder: FormBuilder, private testPipe: EmphesizeFirstCharecter,
    private service: DataService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.accession = {};
    this.header = this.resources.createNewAccessionHeader;
    this.title = this.resources.newRequisitionForm;
    this.formGroup = this.formBuilder.group({
      'acctNumber': ['', Validators.required],
      'phNumber': ['', Validators.required, Validators.pattern(/^\d{4,20}$/)],
      'fName': ['', Validators.required],
      'mName': ['', Validators.maxLength(2)],
      'lName': ['', Validators.required],
      'dob': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required],
      'streetAdd': ['', Validators.required],
      'zip': ['', Validators.required],
      'rPhysician': ['', Validators.required],
      'tPhysician': ['', Validators.required],
      'npi': ['', Validators.required, Validators.pattern(/^\d{4,20}$/)]
    });
    this.setupStatesAutocompleate();
    this.setupPhysicianAutocompleate();
    this.service.getLookupValues('testTypes').then(res => {
      this.tests = res;
      this.changeDetector.detectChanges();
    });
    this.pictireManagementOptions = [this.resources.uploadPictures, this.resources.viewPictures];
    this.initializeComponent();
  }

  setupStatesAutocompleate() {
    this.service.getLookupValues('states').then(states => {
      this.allStates = states;
      this.statesFilteredOptions = this.formGroup.get('state').valueChanges.pipe(
        startWith(),
        map(value => value && typeof value === 'object' ? value.toString() : value),
        map((value) => value ? this.filter(value, this.allStates) : this.allStates.slice()));
    });
    this.formGroup.get('state').updateValueAndValidity();
  }

  setupCityAutocompleate() {
    this.service.getLookupValues('cities;' + this.accession.state).then(cities => {
      this.allCities = cities;
      this.citiesFilteredOptions = this.formGroup.get('city').valueChanges.pipe(
        startWith(),
        map(value => value && typeof value === 'object' ? value.toString() : value),
        map((value) => value ? this.filter(value, this.allCities) : this.allCities.slice()));
    });
    this.formGroup.get('city').updateValueAndValidity();
  }

  setupPhysicianAutocompleate() {
    this.service.getLookupValues('physicians').then(names => {
      this.allPhysicians = names;
      this.referringPhysiciansFilteredOptions = this.formGroup.get('rPhysician').valueChanges.pipe(
        startWith(),
        map(value => value && typeof value === 'object' ? value.toString() : value),
        map((value) => value ? this.filter(value, this.allPhysicians) : this.allPhysicians.slice()));
      this.treatingPhysiciansFilteredOptions = this.formGroup.get('tPhysician').valueChanges.pipe(
        startWith(),
        map(value => value && typeof value === 'object' ? value.toString() : value),
        map((value) => value ? this.filter(value, this.allPhysicians) : this.allPhysicians.slice()));
    });
    this.formGroup.get('rPhysician').updateValueAndValidity();
    this.formGroup.get('tPhysician').updateValueAndValidity();
  }

  ngOnChanges(): void {
    this.initializeComponent();
  }

  initializeComponent() {
    if (!this.accession.tOrdered) {
      this.title = this.resources.newRequisitionForm;
    }
    else {
      this.title = this.testPipe.transform(this.accession.tOrdered);
    }
  }

  onStateFocusOut(event) {
    this.setupCityAutocompleate();
  }

  onTestSelected(event) {
    if (event.value === 'Bladder EpiCheck' || event.value === 'Lung EpiCheck') {
      this.accession.tOrdered = event.value;
      this.changeDetector.detectChanges();
      this.initializeComponent();
    }
  }

  onManagePicturesSelected() {
    if (this.selectedPictureManagementOption == this.resources.uploadPictures) {
      let fileElement = document.getElementById('hiddenfileinput') as HTMLElement;
      fileElement.click();
    }
    else {
      //todo: show pictures
    }
    this.selectedPictureManagementOption = '';
  }

  onPictureUploadChange(event) {
    //todo: upload file
  }

  filter(name: string, allvalues: string[]): string[] {
    return allvalues.filter(option =>
      option.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onCancelClick() {

  }

  onSaveClick() {

  }

  onPrintLabelClick() {

  }

  onNextTestSelected(event) {

  }

  onAlertClosed() {

  }
}
