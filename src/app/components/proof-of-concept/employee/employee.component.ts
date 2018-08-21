import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee/employee';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  //employees:Employee[]  = [];  
  employees = [];
  message;
  response;
  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.EmployeeService.getEmployees().subscribe(
      data => {         
        this.response = data;
        console.log(data.status);
        if (data.status == 200) {
          this.employees = data.body;
        }        
        else if (data.status == 206) {          
         this.message = "employees not found" ;
        }
      },
      err => this.handleError(err)
    );
  }
  handleError(error: HttpErrorResponse) {
    this.response = error;
    this.message = error.status + " / " + error.message;
    console.log("error caught in component : Status => " + error.status);
  }
}
