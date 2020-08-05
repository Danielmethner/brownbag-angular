import { Component, OnInit, Input } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { OrderStex } from '@models/OrderStex';
import { OrderStexService } from '@services/order-stex.service';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-order-stex-list',
  templateUrl: './order-stex-list.component.html',
  styleUrls: ['./order-stex-list.component.css']
})
export class OrderStexListComponent implements OnInit {
  @Input() objParty: ObjParty;
  faSort = faSort;
  orderStexList: OrderStex[];
  cols: any[];
  multiSortMeta: any[];

  constructor(private orderStexService: OrderStexService) { }

  ngOnInit(): void {
    const partyId = this.objParty.id;
    this.orderStexService.geOrderStexByParty(partyId).subscribe(orderStexList => {

      if (orderStexList != null) {
        this.orderStexList = orderStexList;
      }
    });


    this.cols = [
      { field: 'id', header: 'Order ID', filter: true, classes: 'text-center max-width-20px', type: 'integer' },
      { field: 'assetName', header: 'Asset', filter: true, classes: 'text-left', type: 'text' },
      { field: 'orderDir', header: 'Buy/ Sell', filter: true, classes: 'text-right', type: 'buy-sell' },
      { field: 'qty', header: 'Qty', filter: true, classes: 'text-right', type: 'integer' },
      { field: 'qtyExec', header: 'Qty Exec', filter: true, classes: 'text-right', type: 'integer' },
      { field: 'priceLimit', header: 'Price', filter: true, classes: 'text-right', type: 'currency' },
      { field: 'orderStatus', header: ' Status', filter: true, classes: 'text-right', type: 'text' },
      { field: '', header: 'Discard', filter: false, classes: 'text-right', type: 'percent' }
    ];

    this.multiSortMeta = [{ field: 'id', order: -1 }];
  }

}
