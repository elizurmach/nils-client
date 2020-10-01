import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lookupValues: any = {
    'testTypes': ['Blader epi check', 'Lung epi check'],
    'containerFaults': ['Container integrity', 'Sample volume', 'Sample color', 'Sample consistency']
  };

  constructor(private http: HttpClient) { }

  getLookupValues(key: string) {
    return of(this.lookupValues[key]);
  }
}
