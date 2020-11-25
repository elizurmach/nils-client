import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { PendingAccession } from '../model/accession';
import { tap, map } from 'rxjs/operators';
import { FilterParameters, FiltredResults } from '../model/filter-parameters';

@Injectable({
  providedIn: 'root'
})

export class PendingAccessionService {

  private url: string = 'http://nilspocdataservice-env.eba-2hygmmn6.us-west-2.elasticbeanstalk.com/accessions/';

  private currentFilterParams: FilterParameters = {
    filter: '',
    pageIndex: 0,
    pageSize: 10,
    sorting: {
      colName: 'creationDate', direction: 'Desending'
    }
  };

  private cashedAccessions: { [key: string]: FiltredResults<PendingAccession> } = {}

  constructor(private http: HttpClient) { }

  loadPendingAccessions(params: FilterParameters): Observable<FiltredResults<PendingAccession>> {

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

  private getAccessions(params: FilterParameters): Observable<FiltredResults<PendingAccession>> {

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
          (res: { total: number, data: Array<any> } | any) => {
            return {
              total: res['accessions'].length, // res.total,
              data: res['accessions'].map(dbObj => ({ //res.data.map(dbObj => ({
                id: dbObj['ID'],
                sampleNumber: Math.floor(Math.random() * 100000),
                creationDate: dbObj['CREATION_DATE'],
                accessionNumber: dbObj['ACCESSION_ID'],
                pName: `${dbObj['FIRST_NAME']} ${dbObj['MIDDLE_NAME']} ${dbObj['LAST_NAME']}`,
                status: dbObj['PATIENT_STATUS_ID'],
                accessioner: 'Tal Gadish'
              } as PendingAccession))
            }
          }
        )
      );
  }
}
