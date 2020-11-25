import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HealthcareProviderInfo } from '../../../model/requisition-form';
import { healthcareProviderResources } from 'src/assets/resources/healthcare-provider-resources';
import { healthcareProviderErrorMessages } from 'src/assets/resources/form-groups/healthcare-provider.form-group';

@Component({
  selector: 'app-healthcare-provider-information',
  templateUrl: './healthcare-provider-information.component.html',
  styleUrls: ['./healthcare-provider-information.component.css']
})
export class HealthcareProviderInformationComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() data: HealthcareProviderInfo;
  @Input() stepNumber: number;
  public resources = healthcareProviderResources;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage(fieldName: string) {
    if (!this.formGroup.controls[fieldName].touched) {
      return null;
    }
    if (this.formGroup.controls[fieldName] &&
      this.formGroup.controls[fieldName].errors) {
      for (let err in this.formGroup.controls[fieldName].errors) {
        if (err &&
          healthcareProviderErrorMessages[fieldName] &&
          healthcareProviderErrorMessages[fieldName][err]) {
          return healthcareProviderErrorMessages[fieldName][err];
        }
      }
    }
    return this.resources.messages.genericFieldError;
  }
}
