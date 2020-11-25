import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function getHealthcareProviderFormGroup(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    'instName': ['', [Validators.required]],
    'instAddress': ['', [Validators.required]],
    'instCity': ['', [Validators.required]],
    'instState': ['', [Validators.required]],
    'instZip': ['', [Validators.required]],
    'instPhoneNumber': ['', [Validators.required, Validators.pattern(/^(\d{4,20})$/)]],
    'instFaxNumber': ['', [Validators.pattern(/^(\d{4,20})$/)]],
    'instEmail': ['', [Validators.required, Validators.email]],
    'requisitor': ['', [Validators.required]],
    'reqDate': ['', [Validators.required]],
    'oPhysician': ['', [Validators.required]],
    'npi': ['', [Validators.required, Validators.pattern(/^(\d{4,20})$/)]],
    'authSigniture': ['', [Validators.required]],
    'authDate': ['', [Validators.required]]
  });
}

export const healthcareProviderErrorMessages = {
  instName: {
    required: 'Institute name is required'
  },
  requisitor: {
    required: 'Requisitor name is required'
  },
  instState: {
    required: 'State is required'
  },
  instCity: {
    required: 'City is required'
  },
  instAddress: {
    required: 'Address is required'
  },
  instZip: {
    required: 'Zip code is required'
  },
  instPhoneNumber: {
    required: 'Phone number is required',
    pattern: 'Invalid format'
  },
  instFaxNumber: {
    pattern: 'Invalid format'
  },
  instEmail: {
    required: 'Email is required',
    email: 'Invalid format'
  },
  reqDate: {
    required: 'Requisition date is required'
  },
  oPhysician: {
    required: 'Ordering physitian is required',
  },
  npi: {
    required: 'NPI is required',
    pattern: 'Invalid format'
  },
  authSigniture: {
    required: 'Authorized signiture is required'
  },
  authDate: {
    required: 'Authorized date is required'
  }
}
