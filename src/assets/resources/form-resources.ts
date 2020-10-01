export const resources = {
  sampleAccession: {
    fieldSets: [{
      title: 'Set 1',
      fields: {
        patientId: {
          label: 'Patient ID',
          readonly: true,
          validations: [{
            name: 'required',
            message: 'Sample has to be attached to patient'
          }]
        },
        samplePhoto: {
          label: 'Upload Photo of Sample',
          type: 'file',
          validations: [{
            name: 'required',
            message: 'A photo of the sample is required'
          }]
        },
        requisitionForm: {
          label: 'Upload Requisition Form',
          type: 'file',
          validations: [{
            name: 'required',
            message: 'A copy of the requisition form is required'
          }]
        },
        requiredTest: {
          label: 'Select test',
          type: 'select',
          options: 'testTypes',
          validations: [{
            name: 'required',
            message: 'Selecting a test to perform is required'
          }]
        },
        dueDate: {
          label: 'Due date',
          type: 'date'
        }
      }
    },
    {
      title: 'Set 2',
      fields: {
        containerExpectedCount: {
          label: 'Expected container count',
          type: 'number'
        },
        containerActualCount: {
          label: 'Expected container count',
          type: 'number'
        },
        isPackageIntact: {
          label: 'Is package intact',
          type: 'checkbox'
        },
        containerFault: {
          label: 'Container condition verification',
          type: 'select',
          options: 'containerFaults',
        },
        containerFaultDescription: {
          label: 'Container fault description'
        }
      }
    }]
  }
}
