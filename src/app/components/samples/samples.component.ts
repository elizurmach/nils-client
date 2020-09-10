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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'samplePhoto': [null, Validators.required],
      'name': [null, Validators.required],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
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
    this.sample = value;
  }
}
