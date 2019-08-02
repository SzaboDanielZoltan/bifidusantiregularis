import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/model/bill';
import { MockData } from 'src/app/model/mock-data';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  title: string = 'Bills';

  data = new MockData();
  bills: Bill[] = this.data.bills;

  clgBills() {
    console.log(this.bills);
  }

  constructor() { }

  ngOnInit() {
  }

}
