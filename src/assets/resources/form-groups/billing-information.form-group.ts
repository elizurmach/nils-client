import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function getBillingInfoFormGroup(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    'isSelfPay': ['', []],
    'billClient': ['', []],
    'clientName': ['', [Validators.required]],
    'clientCode': ['', [Validators.required]],
    'authNumber': ['', [Validators.required]]
  });
}

export const billingInfoErrorMessages = {
  isSelfPay: {
  },
  billClient: {
  },
  clientName: {
    required: 'Client name is required'
  },
  clientCode: {
    required: 'Client code is required'
  },
  authNumber: {
    required: 'Authentication number is required'
  }
}
