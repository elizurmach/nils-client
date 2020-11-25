import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Accession, NewAccession } from '../model/accession';
import { tap, map } from 'rxjs/operators';
import { FilterParameters, FiltredResults } from '../model/filter-parameters';
import { Requisition, HealthcareProvider } from '../model/healthcare-provider';

@Injectable({
  providedIn: 'root'
})

export class AccessionService {

  private url: string = 'http://nilspocdataservice-env.eba-2hygmmn6.us-west-2.elasticbeanstalk.com/accessions/';

  private currentFilterParams: FilterParameters = {
    filter: '',
    pageIndex: 0,
    pageSize: 10,
    sorting: {
      colName: 'creationDate', direction: 'Desending'
    }
  };

  private cashedAccessions: { [key: string]: FiltredResults<Accession> } = {}

  constructor(private http: HttpClient) { }

  createNewAccession(accession: NewAccession): Promise<string> {
    return this.http.post(
      this.url, accession).toPromise()
      .then(res => {
        console.log('post results: ' + res);
        return this.http.get(this.url + res['success']).toPromise()
          .then(acc => {
            console.log('get results: ' + acc)
            return acc['accession'][0]['ACCESSION_NUM'];
          })
      });
  }

  loadAccessions(params: FilterParameters): Observable<FiltredResults<Accession>> {

    // set default sorting as last known
    if (!params.sorting) {
      params.sorting = this.currentFilterParams.sorting;
    }

    //set key for cash
    let cashKey = `${params.pageIndex}/${params.pageSize}`;

    // if filter or sorting have changed - drop cash
    if (params.filter !== this.currentFilterParams.filter ||
      params.sorting.colName !== this.currentFilterParams.sorting.colName ||
      params.sorting.direction !== this.currentFilterParams.sorting.direction) {
      this.currentFilterParams = params;
      this.cashedAccessions = {}
    }

    // if cash contains result - return cashed, else get from server
    if (this.cashedAccessions && this.cashedAccessions[cashKey]) {
      return of(this.cashedAccessions[cashKey]);
    }
    else {
      return this.getAccessions(params)
        .pipe(
          tap(res => {
            this.cashedAccessions[cashKey] = res;
          })
        );;
    }
  }

  public getAccessionById(id: number): Observable<Accession> {
    return this.http.get<any>(this.url + id).pipe(
      map(res => this.mapDbObjToAccession(res.accession[0])));
  }

  public getHealthcareProviderInfoByAccessionId(id: number): Observable<Requisition> {
    return this.http.get<any>(this.url + id).pipe(
      map(res => {
        return {
          provider: {
            name: res.accession[0]['SOURCE_INSTITUTE'],
            address: 'Institute address',
            city: 'Institute city',
            state: 'Institute sState',
            zip: 'Institute zip code',
            phNumber: '1234567890',
            email: 'institute@organisation.com'
          } as HealthcareProvider,
          requisitor: 'Dave',
          reqDate: res.accession[0]['CREATION_DATE'],
          oPhisician: res.accession[0]['REFERRING_PHYSICIAN'],
          patientNpi: res.accession[0]['NPI'],
          signiture: {},
          sigDate: new Date()
        }
      }));
  }

  private getAccessions(params: FilterParameters): Observable<FiltredResults<Accession>> {

    //set parameters to send to API
    let httpParams = new HttpParams()
      .set('filter', params.filter)
      .set('pageIndex', params.pageIndex.toString())
      .set('pageSize', params.pageSize.toString())
      .set('sorting', JSON.stringify(params.sorting));

    //get values from API
    return this.http.get<any>(this.url, { params: httpParams })
      .pipe(
        map( // map database objects to accession
          (res: { total: number, data: Array<any> }) => {
            return {
              total: res.total,
              data: res.data.map(this.mapDbObjToAccession)
            }
          }
        )
      );
  }

  private mapDbObjToAccession(dbObj: any): Accession {
    return {
      id: dbObj['ID'],
      lastModified: dbObj['LAST_MODIFIED_DATE'],
      creationDate: dbObj['CREATION_DATE'],
      accessionNumber: dbObj['ACCESSION_ID'],
      tOrdered: dbObj['TEST_ORDERED'],
      phNumber: dbObj['PHONE_NUMBER'],
      fName: dbObj['FIRST_NAME'],
      mName: dbObj['MIDDLE_NAME'],
      lName: dbObj['LAST_NAME'],
      dob: dbObj['BIRTH_DATE'],
      state: dbObj['STATE'],
      city: dbObj['CITY'],
      streetAdd: dbObj['ADDRESS'],
      zip: dbObj['ZIP_CODE'],
      rPhysician: dbObj['REFERRING_PHYSICIAN'],
      tPhysician: dbObj['TREATING_PHYSICIAN'],
      npi: dbObj['NPI'],
      sex: dbObj['GENDER'],
      medicalRecordNumber: Math.floor(Math.random() * 1000000).toString(),
      icdCodes: dbObj['ICD_CODE'],
      isRepeatPatient: false
    } as Accession;
  }
}
