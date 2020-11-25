import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { User } from '../model/user';
import { Accession, PendingAccession } from '../model/accession';
import { tap, map } from 'rxjs/operators';
import { FilterParameters, FiltredResults } from '../model/filter-parameters';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  lookupValues: { [key: string]: Array<string> } = {
    'testTypes': ['Bladder EpiCheck', 'Lung EpiCheck'],
    'containerFaults': ['Container integrity', 'Sample volume', 'Sample color', 'Sample consistency'],
    'states': ['Israel'],
    'cities': ['Jerusalem', 'Tel-Aviv'],
    'streets': ['foo', 'bar']
  };

  constructor(private http: HttpClient) { }

  delay = ms => new Promise(res => setTimeout(res, ms))

  getLookupValues(key: string): Promise<Array<string>> {
    return this.delay(Math.floor(Math.random() * 1000)).then(() => { return of(this.lookupValues[key]).toPromise() });
  }

  login(userName: string, password: string): Promise<User> {
    return this.delay(Math.floor(Math.random() * 1000)).then(() => {
      return {
        userName: userName,
        role: 'system-admin',
        displayName: 'Scrooge McDuck',
        lastLogin: new Date()
      }
    });
  }
}
