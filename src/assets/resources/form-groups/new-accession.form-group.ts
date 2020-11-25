import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function getNewAccessionFormGroup(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    'acctNumber': ['', [Validators.required]],
    'phNumber': ['', [Validators.required, Validators.pattern(/^(\d{4,20})$/)]],
    'fName': ['', [Validators.required]],
    'mName': ['', [Validators.maxLength(3)]],
    'lName': ['', [Validators.required]],
    'dob': ['', [Validators.required]],
    'state': ['', [Validators.required]],
    'city': ['', [Validators.required]],
    'address': ['', [Validators.required]],
    'zip': ['', [Validators.required]],
    'rPhysician': ['', [Validators.required]],
    'tPhysician': ['', [Validators.required]],
    'npi': ['', [Validators.required, Validators.pattern(/^(\d{4,20})$/)]]
  });
}

export const newAccessionErrorMessages = {
  acctNumber: {
    required:'Account number is required'
  },
  phNumber: {
    required: 'Phone number is required',
    pattern: 'Invalid format'
  },
  fName: {
    required: 'First name is required'
  },
  mName: {
    maxLength: 'Initials only'
  },
  lName: {
    required: 'Last name is required'
  },
  dob: {
    required: 'Date of birth is required'
  },
  state: {
    required: 'State is required'
  },
  city: {
    required: 'City is required'
  },
  address: {
    required: 'Address is required'
  },
  zip: {
    required: 'Zip code is required'
  },
  rPhysician: {
    required: 'Refering physician is required'
  },
  tPhysician: {
    required: 'Treating physician is required'
  },
  npi: {
    required: 'NPI is required',
    pattern: 'Invalid NPI format'
  }
}
