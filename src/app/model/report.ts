export interface PatientReportRecord {
  id?: number;
  accessionId: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  ageInYears: number;
  medicalRecordNumber: string;
  gender: string;
  referringPhysician: string;
  sourceInstitute: string;
  icdCode: string;
  sampleType: string;
  collectionDate: string;
  arrivalDate: string;
  testType: string;
  epiScore?: number;
  interpretation?: string;
  testDate?: string;
  reference?: string;
  phoneNumber?: string;
  labDirectorName?: string;
  labDirectorSignature?: string;
  comments?: string;
}


export interface PendingPatientReport {
  id?: number,
  sampleNumber?: number,
  creationDate?: Date,
  accessionNumber?: string,
  pName?: string,
  status?: string,
  cls?: string
}
