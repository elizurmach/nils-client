import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function getPatientInformationFormGroup(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    'lName': ['', [Validators.required]],
    'fName': ['', [Validators.required]],
    'mName': ['', [Validators.maxLength(3)]],
    'address': ['', [Validators.required]],
    'city': ['', [Validators.required]],
    'state': ['', [Validators.required]],
    'zip': ['', [Validators.required]],
    'phNumber': ['', [Validators.required, Validators.pattern(/^(\d{4,20})$/)]],
    'dob': ['', [Validators.required]],
    'gender': ['', [Validators.required]],
    'medicalRecordNumber': ['', [Validators.required, Validators.pattern(/^(\d{4,20})$/)]],
    'icdCodes': ['', [Validators.required, Validators.pattern(/^(\d{4,20})$/)]],
    'isRepeatPatient': ['', []]
  });
}

export const patiantInformationErrorMessages = {
  lName: {
    required: 'Last name is required'
  },
  fName: {
    required: 'First name is required'
  },
  mName: {
    maxLength: 'Initials only'
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
  phNumber: {
    required: 'Phone number is required',
    pattern: 'Invalid format'
  },
  dob: {
    required: 'Date of birth is required'
  },
  gender: {
    required: 'Gender is required'
  },
  medicalRecordNumber: {
    required: 'Medical record number is required',
    pattern:'Invalid format'
  },
  icdCodes: {
    required: 'ICD codes is required',
    pattern: 'Invalid format'
  }
}
