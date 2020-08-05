import { Component, OnInit, Input } from '@angular/core';
import { OrderStex } from '@models/OrderStex';
import { ObjParty } from '@models/ObjParty';
@Component({
  selector: 'app-new-order-share-ipo',
  templateUrl: './new-order-share-ipo.component.html',
  styleUrls: ['./new-order-share-ipo.component.css']
})
export class NewOrderShareIpoComponent implements OnInit {

  @Input() objParty: ObjParty;
  orderStex: OrderStex;
  status: string;

  constructor() { }

  ngOnInit(): void {
    this.orderStex = new OrderStex();
    this.orderStex.partyId = this.objParty.id;
    this.orderStex.partyName = this.objParty.name;
  }

}
