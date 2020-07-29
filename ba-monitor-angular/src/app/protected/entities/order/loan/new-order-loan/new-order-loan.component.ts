import { Component, OnInit } from '@angular/core';
import { OrderLoan } from '@models/OrderLoan';

@Component({
  selector: 'app-new-order-loan',
  templateUrl: './new-order-loan.component.html',
  styleUrls: ['./new-order-loan.component.css']
})
export class NewOrderLoanComponent implements OnInit {

  orderLoan: OrderLoan;
  status: string;

  constructor() { }

  ngOnInit(): void {
    this.orderLoan = new OrderLoan();
    //  this.orderLoan.partyName = 'hello world';
    //   id: 1,
    //   partyName: 'fsdf',
    //   qty: number,
    //   credFacility: number,
    //   intrRate: number,
    //   intrAmt: number,
    //   matDate: string
    //   );
  }

}
