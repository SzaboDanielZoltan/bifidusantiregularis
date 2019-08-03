import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  /**
   * Szülőnek küldi ki, hogy close lenyomására a counter visszaálljon 0-ra.
   */
  @Output() changeCounter = new EventEmitter()
  /**
   * Az adatok, amelyek megjelennek a modális ablakban.
   */
  @Input() modalData: any = {};
  string: string = ``;

  /**
   * Ha a showCounter property változik, akkor fut le a setter.
   * Amennyiben a számláló nem 0, akkor megjeleníti az ablakot.
   */
  @Input() set showCounter(counter) {
    console.log(counter);
    if (counter > 0) {
      for (let k in this.modalData) {
        if (typeof this.modalData[k] == 'object') {
          this.string += `<p>${k}: ${this.modalData[k].first} ${this.modalData[k].last}</p>`
        } else {
          this.string += `<p>${k}: ${this.modalData[k]}</p>`
        }
      }
      this.show();
    }
  }

  isShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.isShow = true;
  }

  hide(): void {
    this.isShow = false;
    this.changeCounter.emit(0);
    this.string = ``;
  }

  getDisplay(): string {
    return this.isShow ? 'block' : 'none';
  }

}
