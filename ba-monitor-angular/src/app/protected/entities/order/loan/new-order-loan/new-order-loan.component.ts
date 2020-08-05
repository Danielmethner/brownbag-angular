import { Component, OnInit, Input } from '@angular/core';
import { OrderLoan } from '@models/OrderLoan';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-new-order-loan',
  templateUrl: './new-order-loan.component.html',
  styleUrls: ['./new-order-loan.component.css']
})
export class NewOrderLoanComponent implements OnInit {
  @Input() objParty: ObjParty;
  orderLoan: OrderLoan;
  status: string;

  constructor() { }

  ngOnInit(): void {
    this.orderLoan = new OrderLoan(); 
    this.orderLoan.partyId = this.objParty.id;
    this.orderLoan.partyName = this.objParty.name;
  }

}
