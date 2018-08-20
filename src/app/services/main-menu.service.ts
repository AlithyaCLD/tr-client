import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Period } from '../models/main-menu/period';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(private http: HttpClient) { }

  getAvailablePeriods(): Observable<Period[]>{

    return this.http.get<Period[]>("http://localhost:60956/api/menu");

    // To check if there is a business rule in backend to generate this list;     
    // otherwise, a javascript (ts) to give last 4 months for example? (no need to call an api for this)
    //return [ "2018-08", "2018-07", "2018-06", "2018-05", "2018-04", "2018-03 "];
  }
}
