import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PatientInfo } from '../../../model/requisition-form';
import { patientInfoResources } from 'src/assets/resources/patient-info-resources'
import { MatCheckboxChange } from '@angular/material';
import { patiantInformationErrorMessages } from 'src/assets/resources/form-groups/patient-information.form-group';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() data: PatientInfo;
  public resources = patientInfoResources;
  public genders: Array<string>;

  constructor() { }

  ngOnInit() {
    this.genders = [];
    for (let gender in this.resources.genders) {
      this.genders.push(this.resources.genders[gender]);
    }
  }

  genderChange(event: MatCheckboxChange, value: string) {
    if (event.checked) {
      this.data.gender = value;
    }
    else {
      this.data.gender = null;
    }
  }

  dobChange(value: Date) {
    this.data.dob = value;
  }

  getErrorMessage(fieldName: string) {
    if (!this.formGroup.controls[fieldName].touched) {
      return null;
    }
    if (this.formGroup.controls[fieldName] &&
      this.formGroup.controls[fieldName].errors) {
      for (let err in this.formGroup.controls[fieldName].errors) {
        if (err &&
          patiantInformationErrorMessages[fieldName] &&
          patiantInformationErrorMessages[fieldName][err]) {
          return patiantInformationErrorMessages[fieldName][err];
        }
      }
    }
    return this.resources.messages.genericFieldError;
  }
}
