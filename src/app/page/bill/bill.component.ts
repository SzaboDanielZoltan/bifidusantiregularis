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

  bill: object;
  chosenId: string;


  modalCounter: number = 0;
  showModal(event) {
    this.modalCounter = 1;
    console.log(event.target);
    this.chosenId = event.target.id;
    this.bill = this.bills.filter(bill => bill._id === this.chosenId)[0];
  }

  changeCounter(zero: number) {
    this.modalCounter = zero;
  }

  constructor() { }

  ngOnInit() {
  }

}
