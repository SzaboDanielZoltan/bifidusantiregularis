import { Component, OnInit } from '@angular/core';
import {MockData} from 'src/app/model/mock-data';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  dataEmployee=new MockData();
  employeesNumber:number=this.dataEmployee.employee.length;
  billsNumber:number=this.dataEmployee.bills.length;
  

  modalCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.modalCounter++;
  }

}
