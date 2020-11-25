export interface HealthcareProvider {
  id?: number,
  name?: string,
  address?: string,
  city?: string,
  state?: string,
  zip?: string,
  phNumber?: string,
  email?: string,
}

export interface Requisition {
  provider?: HealthcareProvider,
  requisitor?: string,
  reqDate?: Date,
  oPhisician?: string,
  patientNpi?: string,
  signiture?: any,
  sigDate?: Date
}
