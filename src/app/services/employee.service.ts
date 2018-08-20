import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Employee } from '../models/employee/employee';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<HttpResponse<Employee[]>> {
    return this.http.get<Employee[]>('http://localhost:60956/api/employee', { observe: 'response' })
      .pipe(catchError(this.errorHandler));
  }
  private errorHandler(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    }
    else {
      console.error('Server Side Error: ' + errorResponse);
    }

    return throwError('Some error...')
  }
}
