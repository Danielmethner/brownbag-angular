import { Component, OnInit } from '@angular/core';
import { OrderStex } from '@models/OrderStex';
@Component({
  selector: 'app-new-order-share-ipo',
  templateUrl: './new-order-share-ipo.component.html',
  styleUrls: ['./new-order-share-ipo.component.css']
})
export class NewOrderShareIpoComponent implements OnInit {
  orderStex: OrderStex;
  status: string;

  constructor() { }

  ngOnInit(): void {
    this.orderStex = new OrderStex();
  }

}
