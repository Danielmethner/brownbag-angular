import { Component, OnInit } from '@angular/core';
import { OrderStex } from '@models/OrderStex';
@Component({
  selector: 'app-new-order-bond-ipo',
  templateUrl: './new-order-bond-ipo.component.html',
  styleUrls: ['./new-order-bond-ipo.component.css']
})
export class NewOrderBondIpoComponent implements OnInit {


  orderStex: OrderStex;
  status: string;
  coupon:number;

  constructor() { }

  ngOnInit(): void {
    this.orderStex = new OrderStex();
  }

}
