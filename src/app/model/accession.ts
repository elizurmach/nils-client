export interface AccessionBase {
  id?: number,
  accessionNumber?: string,
  tOrdered?: string,
}

export interface Accession extends AccessionBase {
  lastModified?: Date,
  creationDate?: Date,
  acctNumber?: string,
  phNumber?: string,
  fName?: string,
  mName?: string,
  lName?: string,
  dob?: Date,
  state?: string,
  city?: string,
  address?: string,
  zip?: string,
  rPhysician?: string,
  tPhysician?: string,
  npi?: string,
  sex?: string,
  medicalRecordNumber?: string,
  icdCodes?: string,
  isRepeatPatient?: boolean
}

export interface NewAccession {
  id?: number,
  accessionNumber?: string,
  tOrdered?: string,
  acctNumber?: string,
  phNumber?: string,
  fName?: string,
  mName?: string,
  lName?: string,
  dob?: Date,
  state?: string,
  city?: string,
  address?: string,
  zip?: string,
  rPhysician?: string,
  tPhysician?: string,
  npi?: string,
}

export interface PendingAccession {
  id?: number,
  sampleNumber?: number,
  creationDate?: Date,
  accessionNumber?: string,
  pName?: string,
  status?: string,
  accessioner?: string
}
