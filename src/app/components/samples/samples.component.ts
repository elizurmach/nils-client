import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  public resources = environment.resources;
  public formGroup: FormGroup;
  public titleAlert: string = 'This field is required';
  private samplePhotoData: any;
  private requisitionFormData: any;
  private sample: any = '';
  public tubeValidation: Array<string>;
  public testOptions = ['Blader EPI check', 'Lung EPI check'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
    this.sample = {
      patientId: '1234567890',
      samplePhoto: undefined,
      reqisutionForm: undefined,
      test: undefined,
      dueDate: new Date(),
      expectedTubeCount: 1,
      actualTubeCount: undefined,
      isPackageIntact: undefined,
    }
    this.tubeValidation = ['color', 'volume', 'consistensy']
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'patientId': [null, Validators.required],
      'samplePhoto': [null, Validators.required],
      'reqisutionForm': [null, Validators.required],
      'test': [null, Validators.required],
      'dueDate': [null],
      'tubeExpectedCount': [null],
      'tubeActualCount': [null],
      'isPackageIntact': [null, Validators.required],
      'tube': [null],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  onUploadSamplePhoto($event) {
    this.samplePhotoData = $event.target.files[0];
    // todo: service...
  }

  onUploadRequisitionForm($event) {
    this.requisitionFormData = $event.target.files[0];
    // todo: service...
  }

  onSubmit(value) {
    console.log(this.sample);
  }

  selectionChange(option) {

  }
}
