import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  //date utility?
  constructor() { }
  getDate(date: Date, format: string){
    return date.toString();
  }  
}
