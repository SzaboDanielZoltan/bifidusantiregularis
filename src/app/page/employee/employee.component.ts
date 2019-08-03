import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { MockData } from 'src/app/model/mock-data';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  header: string = 'Employees';

  md: MockData = new MockData();
  employee: Employee;
  employees: Employee[] = this.md.employee;
  button: any;
  buttonId: any;
  modalCounter: number = 0;
  showModal(event) {
    this.modalCounter++;
    this.button = event.target;
    this.buttonId = this.button.id;
    console.log(this.buttonId);
    this.employee = this.employees.filter(employee => employee._id === this.buttonId)[0]
  }

  constructor() { }

  ngOnInit() {
  };
}
