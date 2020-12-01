export interface PatientInfo {
  lName?: string,
  fName?: string,
  mName?: string,
  address?: string,
  city?: string,
  state?: string,
  zip?: string,
  phNumber?: string,
  dob?: Date,
  gender?: string,
  medicalRecordNumber?: string,
  icdCodes?: string,
  isRepeatPatient?: boolean
}

export interface HealthcareProviderInfo {
  instName?: string,
  instAddress?: string,
  instCity?: string,
  instState?: string,
  instZip?: string,
  instPhoneNumber?: string,
  instFaxNumber?: string,
  instEmail?: string,
  requisitor?: string,
  reqDate?: Date,
  oPhysician?: string,
  npi?: string,
  authSigniture?: boolean,
  authDate?: Date
}

export interface SpecimenInfo {
  instSpecimentId?: string,
  sType?: string,
  sQuantity?: number,
  collectionDate?: Date,
  retrievedDate?: Date
}

export interface BillingInfo {
  isSelfPay?: boolean,
  clientName?: string,
  clientCode?: string,
  authNumber?: string
}

export interface RequisitionForm {
  id?: number,
  accessionNumber?: string,
  pInfo?: PatientInfo,
  hcpInfo?: HealthcareProviderInfo,
  specInfo?: SpecimenInfo,
  billInfo?: BillingInfo,
  comments?: string
}
