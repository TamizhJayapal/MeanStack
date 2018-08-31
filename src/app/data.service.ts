import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result;
  constructor(private _http:Http) { }
  getStudents(){
        return this._http.get('/students').map(result => this.result = result.json().data); 
          }
}
