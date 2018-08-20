import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  //employees:Employee[]  = [];
  employees = [];
  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.EmployeeService.getEmployees().subscribe(
      data => this.employees = data
    );
  }

}
