import { Employee } from 'src/app/model/employee';
import { MockData } from 'src/app/model/mock-data';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  };
  md: MockData = new MockData();
  employees: Employee[] = this.md.employee;

  header: string = 'Employees';
}
