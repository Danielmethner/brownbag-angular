import { Component, OnInit, Input } from '@angular/core';
import { OrderLoan } from '@models/OrderLoan';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-new-order-loan',
  templateUrl: './new-order-loan.component.html',
  styleUrls: ['./new-order-loan.component.css']
})
export class NewOrderLoanComponent implements OnInit {

  orderLoan: OrderLoan;
  status: string;

  @Input() set objParty(objParty: ObjParty) {
    this.newOrderLoan(objParty);
  }

  constructor() { }

  ngOnInit(): void {
  }

  newOrderLoan(objParty: ObjParty): void {
    if (objParty != null && objParty.id != null) {
      this.orderLoan = new OrderLoan();
      this.orderLoan.partyId = objParty.id;
      this.orderLoan.partyName = objParty.name;
    }
  }
}
