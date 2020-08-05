import { Component, OnInit, Input } from '@angular/core';
import { OrderStex } from '@models/OrderStex';
import { ObjParty } from '@models/ObjParty';
@Component({
  selector: 'app-new-order-bond-ipo',
  templateUrl: './new-order-bond-ipo.component.html',
  styleUrls: ['./new-order-bond-ipo.component.css']
})
export class NewOrderBondIpoComponent implements OnInit {

  @Input() objParty: ObjParty;
  orderStex: OrderStex;
  status: string;
  coupon:number;

  constructor() { }

  ngOnInit(): void {
    this.orderStex = new OrderStex();
    this.orderStex.partyId = this.objParty.id;
    this.orderStex.partyName = this.objParty.name;
  }

}
