import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { newAccessionResources } from 'src/assets/resources/new-accession-resources';
import { DataService } from '../../services/data.service';
import { EmphesizeFirstCharecter } from '../../pipes/emphesize-first-charecter.pipe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewAccession } from '../../model/accession';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AccessionService } from '../../services/accession-service';
import { getNewAccessionFormGroup, newAccessionErrorMessages } from 'src/assets/resources/form-groups/new-accession.form-group';

@Component({
  selector: 'app-new-accession',
  templateUrl: './new-accession.component.html',
  styleUrls: ['./new-accession.component.css']
})
export class NewAccessionComponent implements OnInit, OnChanges {

  public header: string;
  public title: string;
  public uploadedImages: Array<any>;
  public showUploadedImages: boolean;
  public successMessage: string;
  public tests: Array<string>;
  public pictireManagementOptions: Array<string>;
  public selectedPictureManagementOption: string;
  public resources = newAccessionResources;
  public accession: NewAccession;
  public formGroup: FormGroup;

  public allStates: string[];
  public statesFilteredOptions: Observable<string[]>;

  public allCities: string[];
  public citiesFilteredOptions: Observable<string[]>;

  public allPhysicians: string[];
  public referringPhysiciansFilteredOptions: Observable<string[]>;
  public treatingPhysiciansFilteredOptions: Observable<string[]>;

  constructor(private formBuilder: FormBuilder, private testPipe: EmphesizeFirstCharecter,
    private dataService: DataService, private accessionService: AccessionService,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.accession = {};
    this.header = this.resources.createNewAccessionHeader;
    this.title = this.resources.newRequisitionForm;
    this.uploadedImages = [];
    this.formGroup = getNewAccessionFormGroup(this.formBuilder);
    this.setupStatesAutocompleate();
    this.setupPhysicianAutocompleate();
    this.dataService.getLookupValues('testTypes').then(res => {
      this.tests = res;
      this.changeDetector.detectChanges();
    });
    this.pictireManagementOptions = [this.resources.formLabels.uploadPictures, this.resources.formLabels.viewPictures];
    this.initializeComponent();
  }

  setupStatesAutocompleate() {
    this.dataService.getLookupValues('states').then(states => {
      this.allStates = states;
      this.statesFilteredOptions = this.formGroup.get('state').valueChanges.pipe(
        startWith(),
        map(value => value && typeof value === 'object' ? value.toString() : value),
        map((value) => value ? this.filter(value, this.allStates) : this.allStates.slice()));
    });
    this.formGroup.get('state').updateValueAndValidity();
  }

  setupCityAutocompleate() {
    this.dataService.getLookupValues('cities;' + this.accession.state).then(cities => {
      this.allCities = cities;
      this.citiesFilteredOptions = this.formGroup.get('city').valueChanges.pipe(
        startWith(),
        map(value => value && typeof value === 'object' ? value.toString() : value),
        map((value) => value ? this.filter(value, this.allCities) : this.allCities.slice()));
    });
    this.formGroup.get('city').updateValueAndValidity();
  }

  setupPhysicianAutocompleate() {
    this.dataService.getLookupValues('physicians').then(names => {
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
    if (this.selectedPictureManagementOption == this.resources.formLabels.uploadPictures) {
      let fileElement = document.getElementById('hiddenfileinput') as HTMLElement;
      fileElement.click();
    }
    else {
      this.showUploadedImages = true;
    }
    this.selectedPictureManagementOption = '';
  }

  onPictureUploadChange(event) {
    if (event.target.files && event.target.files[0]) {
      let fileName = event.target.files[0].name;
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.uploadedImages.push(event.target['result']);
        this.successMessage = fileName + this.resources.messages.fileUploaded;
      }
    }
  }

  getErrorMessage(fieldName: string): string {
    if (!this.formGroup.controls[fieldName].touched) {
      return null;
    }
    if (this.formGroup.controls[fieldName] &&
      this.formGroup.controls[fieldName].errors) {
      for (let err in this.formGroup.controls[fieldName].errors) {
        if (err &&
          newAccessionErrorMessages[fieldName] &&
          newAccessionErrorMessages[fieldName][err]) {
          return newAccessionErrorMessages[fieldName][err];
        }
      }
    }
    return this.resources.messages.genericFieldError;
  }

  filter(name: string, allvalues: string[]): string[] {
    return allvalues.filter(option =>
      option.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onCancelClick() {

  }

  onSaveClick() {
    //if (this.formGroup.valid) {
      this.save();
    //}
  }

  save(): Promise<void> {
    return this.accessionService.createNewAccession(this.accession)
      .then(res => {
        this.successMessage = this.resources.messages.newAccessionSavedAlert + res;
        console.log('accession number: ' + res);
        this.accession.accessionNumber = res
      });
  }

  onPrintLabelClick() {

  }

  onNextTestSelected(event) {
    //if (this.formGroup.valid) {
      this.save().then(() => {
        this.clear();
        this.onTestSelected(event);
      });
    //}
  }

  clear() {
    this.accession = {};
    this.uploadedImages = [];
    this.formGroup.markAsUntouched();
  }

  onAlertClosed() {
    this.successMessage = ''
  }
}
