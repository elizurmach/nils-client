import { FormConfig } from 'src/app/components/controls/nx-dynamic-form/model/form-config';

export const resources: { [key: string]: FormConfig } = {
  'sampleAccession': {
    title: '',
    fields: [{
      title: 'General information',
      fields: [{
        name: 'patientId',
        label: 'Patient ID',
        type: 'input',
        inputType: 'text',
        readonly: true,
        validations: [{
          name: 'required',
          message: 'Sample has to be attached to patient'
        }]
      },
      {
        name: 'samplePhoto',
        label: 'Upload Photo of Sample',
        type: 'file',
        icon: 'upload_image',
        validations: [{
          name: 'required',
          message: 'A photo of the sample is required'
        }]
      },
      {
        name: 'requisitionForm',
        label: 'Upload Requisition Form',
        type: 'file',
        icon: 'upload_file',
        validations: [{
          name: 'required',
          message: 'A copy of the requisition form is required'
        }]
      }]
    },
    {
      title: '',
      fields: [{
        name: 'requiredTest',
        label: 'Select test',
        type: 'select',
        options: 'testTypes',
        validations: [{
          name: 'required',
          message: 'Selecting a test to perform is required'
        }]
      },
      {
        name: 'dueDate',
        label: 'Due date',
        type: 'date'
      }]
    },
    {
      title: 'Container Information',
      fields: [{
        name: 'containerExpectedCount',
        label: 'Expected container count',
        type: 'input',
        inputType: 'number'
      },
      {
        name: 'containerActualCount',
        label: 'Expected container count',
        type: 'input',
        inputType: 'number'
      }]
    },
    {
      title: '',
      fields: [{
        name: 'isPackageIntact',
        label: 'Is package intact',
        type: 'checkbox'
      },
      {
        name: 'containerFault',
        label: 'Container condition verification',
        type: 'select',
        options: 'containerFaults'
      },
      {
        name: 'containerFaultDescription',
        label: 'Container fault description',
        type: 'input',
        inputType: 'text'
      }]
    }]
  },
  'newAccessionRequisitionForm': {
    title: '',
    fields: [{
      title: 'General Info',
      fields: [{
        name: 'accountNumber',
        label: 'Account number',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'Account number is a mandatory field'
        }]
      },
      {
        name: 'phoneNumber',
        label: 'Phone number',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'Phone number is a mandatory field'
        }]
      },
      {
        name: 'formPhotos',
        label: 'Manage pictures',
        type: 'file',
        icon: 'upload_image'
      }]
    },
    {
      title: '',
      fields: [{
        name: 'firstName',
        label: 'First name',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'First name is a mandatory field'
        }]
      },
      {
        name: 'secondName',
        label: 'Second name',
        type: 'input',
        inputType: 'text'
      },
      {
        name: 'lastName',
        label: 'Last name',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'Last name is a mandatory field'
        }]
      },
      {
        name: 'birthDate',
        label: 'Birth date',
        type: 'date',
        validations: [{
          name: 'required',
          message: 'Birth date is a mandatory field'
        }]
      }]
    },
    {
      title: 'Address',
      fields: [{
        name: 'state',
        label: 'State',
        type: 'autocomplete',
        options: 'states',
        validations: [{
          name: 'required',
          message: 'State is a mandatory field'
        }]
      },
      {
        name: 'city',
        label: 'City',
        type: 'autocomplete',
        options: 'cities',
        validations: [{
          name: 'required',
          message: 'City is a mandatory field'
        }]
      },
      {
        name: 'street',
        label: 'Street',
        type: 'autocomplete',
        options: 'streets',
        validations: [{
          name: 'required',
          message: 'Street is a mandatory field'
        }]
      },
      {
        name: 'zipCode',
        label: 'Zip code',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'Zip code is a mandatory field'
        }]
      }]
    },
    {
      title: 'Physicians Info',
      fields: [{
        name: 'referingPhysician',
        label: 'Refering physician',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'Refering physician is a mandatory field'
        }]
      },
      {
        name: 'treatingPhysician',
        label: 'Treating physician',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'Treating physician is a mandatory field'
        }]
      },
      {
        name: 'npi',
        label: 'NPI',
        type: 'input',
        inputType: 'text',
        validations: [{
          name: 'required',
          message: 'NPI is a mandatory field'
        }]
      }]
    }],
  }
}
