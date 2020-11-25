import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { FilterParameters, FiltredResults } from '../model/filter-parameters';
import { PendingPatientReport } from '../model/Report';

@Injectable({
	providedIn: 'root'
})
export class PendingReportService {
	private url: string = 'http://nilspocdataservice-env.eba-2hygmmn6.us-west-2.elasticbeanstalk.com/accessions/';
	//  private url: string = 'http://nilspocdataservice-env.eba-2hygmmn6.us-west-2.elasticbeanstalk.com/pendingreports/';

	private currentFilterParams: FilterParameters = {
		filter: '',
		pageIndex: 0,
		pageSize: 10,
		sorting: {
			colName: 'creationDate',
			direction: 'Desending'
		}
	};

	private cashedReports: { [key: string]: FiltredResults<PendingPatientReport> } = {};

	constructor(private http: HttpClient) {}

	loadPendingReports(params: FilterParameters): Observable<FiltredResults<PendingPatientReport>> {
		// set default sorting as last known
		if (!params.sorting) {
			params.sorting = this.currentFilterParams.sorting;
		}

		//set key for cash
		let cashKey = `${params.pageIndex}/${params.pageSize}`;

		// if filter or sorting have changed - drop cash
		if (
			params.filter !== this.currentFilterParams.filter ||
			params.sorting.colName !== this.currentFilterParams.sorting.colName ||
			params.sorting.direction !== this.currentFilterParams.sorting.direction
		) {
			this.currentFilterParams = params;
			this.cashedReports = {};
		}

		// if cash contains result - return cashed, else get from server
		if (this.cashedReports && this.cashedReports[cashKey]) {
			return of(this.cashedReports[cashKey]);
		} else {
			return this.getReports(params).pipe(
				tap((res) => {
					this.cashedReports[cashKey] = res;
				})
			);
		}
	}

	private getReports(params: FilterParameters): Observable<FiltredResults<PendingPatientReport>> {
		//set parameters to send to API
		let httpParams = new HttpParams()
			.set('filter', params.filter)
			.set('pageIndex', params.pageIndex.toString())
			.set('pageSize', params.pageSize.toString())
			.set('sorting', JSON.stringify(params.sorting));

		//get values from API
		return this.http.get<any>(this.url, { params: httpParams }).pipe(
			map(
				// map database objects to accession
				(res: { total: number; data: Array<any> } | any) => {
					return {
						total: res['accessions'].length, // res.total,
						data: res['accessions']
							/* *****************************************************
              /* temp - until pending report URL shall work */
							/* ******************************************************/
							.filter((dbObj) => {
								return dbObj['ID'] === 49 || dbObj['ID'] === 44;
							})
							/** ***************************************************** **/
							.map(
								(dbObj: { [x: string]: any }) =>
									({
										//res.data.map(dbObj => ({
										id: dbObj['ID'],
										sampleNumber: Math.floor(Math.random() * 100000),
										creationDate: dbObj['CREATION_DATE'],
										accessionNumber: dbObj['ACCESSION_ID'],
										pName: `${dbObj['FIRST_NAME']} ${dbObj['MIDDLE_NAME']} ${dbObj['LAST_NAME']}`,
										status: dbObj['PATIENT_STATUS_ID'],
										cls: 'Tal Gadish'
									} as PendingPatientReport)
							)
					};
				}
			)
		);
	}
}
