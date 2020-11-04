import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { User } from '../model/user';
import { Accession } from '../model/accession';

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

  createNewAccession(accession: Accession): Promise<string> {
    return this.http.post(
      'http://nilspocdataservice-env.eba-2hygmmn6.us-west-2.elasticbeanstalk.com/accessions', accession).toPromise()
      .then(res => {
        console.log('post results: ' + res);
        return this.http.get('http://nilspocdataservice-env.eba-2hygmmn6.us-west-2.elasticbeanstalk.com/accessions/' + res['success']).toPromise()
          .then(acc => {
            console.log('get results: ' + acc)
           return acc['accession'][0]['ACCESSION_NUM'];
          })
      });
    //return this.delay(Math.floor(Math.random() * 1000)).then(() => { return (Math.floor(Math.random() * 100000) * Math.floor(Math.random() * 100000)).toString(); });
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
