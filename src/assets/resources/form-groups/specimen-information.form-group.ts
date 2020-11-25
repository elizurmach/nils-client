import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function getSpecimenInfoFormGroup(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    'instSpecimentId': ['', [Validators.required]],
    'sType': ['', [Validators.required]],
    'sQuantity': ['', [Validators.required]],
    'collectionDate': ['', [Validators.required]],
    'collectionTime': ['', [Validators.required]],
    'retrievedDate': ['', [Validators.required]]
  });
}

export const specimenInfoErrorMessages = {
  instSpecimentId: {
    required: 'Institute speciment ID is required'
  },
  sType: {
    required: 'Specimen type is required'
  },
  sQuantity: {
    required: 'Specimen quantity is required'
  },
  collectionDate: {
    required: 'Collection date is required'
  },
  collectionTime: {
    required: 'Collection time is required'
  },
  retrievedDate: {
    required: 'Retrieved date is required'
  }
}
