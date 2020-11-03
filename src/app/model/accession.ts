export interface Accession {
  accessionNumber?: string,
  tOrdered?: 'Bladder EpiCheck' | 'Lung EpiCheck',
  acctNumber?: string,
  phNumber?: string,
  fName?: string,
  mName?: string,
  lName?: string,
  dob?: Date,
  state?: string,
  city?: string,
  streetAdd?: string,
  zip?: string,
  rPhysician?: string,
  tPhysician?: string,
  npi?: string
}
