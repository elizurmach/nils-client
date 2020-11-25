import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BillingInfo } from '../../../model/requisition-form';
import { MatCheckboxChange } from '@angular/material';
import { billingInfoErrorMessages } from 'src/assets/resources/form-groups/billing-information.form-group';
import { billingInfoResources } from 'src/assets/resources/billing-info-resources';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.css']
})
export class BillingInformationComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() data: BillingInfo;
  @Input() stepNumber: number;
  public resources = billingInfoResources;

  constructor() { }

  ngOnInit() {
  }

  billingModeChange(event: MatCheckboxChange, value: string) {
    if (event.checked && value === this.resources.fields.isSelfPay) {
      this.data.isSelfPay = true;
    }
    else {
      this.data.isSelfPay = false;
    }
  }

  getErrorMessage(fieldName: string) {
    if (!this.formGroup.controls[fieldName].touched) {
      return null;
    }
    if (this.formGroup.controls[fieldName] &&
      this.formGroup.controls[fieldName].errors) {
      for (let err in this.formGroup.controls[fieldName].errors) {
        if (err &&
          billingInfoErrorMessages[fieldName] &&
          billingInfoErrorMessages[fieldName][err]) {
          return billingInfoErrorMessages[fieldName][err];
        }
      }
    }
    return this.resources.messages.genericFieldError;
  }
}
