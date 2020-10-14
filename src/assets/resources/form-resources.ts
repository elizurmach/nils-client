import { FieldSetConfig } from 'src/app/components/controls/nx-dynamic-form/model/field-set-config';

export const resources: { [key: string]: FieldSetConfig } = {
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
  }
}
