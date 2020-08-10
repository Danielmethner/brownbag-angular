import { Component, OnInit, Input } from '@angular/core';
import { ObjAsset } from '@models/ObjAsset';
import { OrderStex } from '@models/OrderStex';
import { OrderStexService } from '@services/order-stex.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-order-stex-list-public',
  templateUrl: './order-stex-list-public.component.html',
  styleUrls: ['./order-stex-list-public.component.css']
})
export class OrderStexListPublicComponent implements OnInit {


  orderbook: OrderStex[][];

  @Input()
  set objAsset(objAsset: ObjAsset) {
    this.getOrderBook(objAsset);
  }
  cols: any[];
  multiSortMeta: any[];
  orderStexList: OrderStex[];
  faSort = faSort;

  constructor(private orderStexService: OrderStexService) { }

  ngOnInit(): void {
    this.getOrderBook(this.objAsset);
    this.cols = [
      { field: 'id', header: 'Order ID', filter: true, classes: 'text-center max-width-20px', type: 'integer' },
      { field: 'assetName', header: 'Asset', filter: true, classes: 'text-left', type: 'text' },
      { field: 'qtyRemaining', header: 'Qty', filter: true, classes: 'text-right', type: 'integer' },
      { field: 'priceLimit', header: 'Price', filter: true, classes: 'text-right', type: 'currency' },
    ];
    this.multiSortMeta = [{ field: 'id', order: -1 }];
  }

  getOrderBook(selectedAsset: ObjAsset): void {

    let buyOrders: OrderStex[] = [];
    let sellOrders: OrderStex[] = [];
    this.orderbook = [];
    if (selectedAsset != null) {
      this.orderStexService.getOrdersByPlacedAndAsset(selectedAsset.id).subscribe(orderStexList => {
        if (orderStexList != null) {
          console.log(buyOrders);
          orderStexList.forEach(orderStex => {
            if (orderStex.orderDir == 'BUY') {
              buyOrders.push(orderStex);
            } else {
              sellOrders.push(orderStex);
            }
          });
          this.orderbook.push(buyOrders);
          this.orderbook.push(sellOrders);
          this.orderStexList = orderStexList;
        }
      });
    }
  }

}
