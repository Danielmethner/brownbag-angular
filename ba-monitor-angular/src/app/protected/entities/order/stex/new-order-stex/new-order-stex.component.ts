import { Component, OnInit, Input } from '@angular/core';
import { OrderStex } from '@models/OrderStex';
import { ObjAsset } from '@models/ObjAsset';
import { SelectItem } from 'primeng/api';
import { ObjAssetService } from '@services/obj-asset.service';
import { ObjParty } from '@models/ObjParty';
@Component({
  selector: 'app-new-order-stex',
  templateUrl: './new-order-stex.component.html',
  styleUrls: ['./new-order-stex.component.css']
})
export class NewOrderStexComponent implements OnInit {
  @Input() objParty: ObjParty;
  
  orderStex: OrderStex;
  status: string;
  qtyAvbl: number;
  newOrderAmt: number;
  fundsAvbl: number;
  assetList: SelectItem[];
  selectedAsset: ObjAsset;
  btnBuyClass = 'btn-success';
  btnSellClass = 'btn-outline-danger';
  constructor(private objAssetService: ObjAssetService) { this.assetList = []; }

  ngOnInit(): void {

    // initialise new order as BUY order
    this.orderStex = new OrderStex();
    this.orderStex.orderDir = 'BUY';

    // retrieve tradeable assets
    this.objAssetService.getAllSec().subscribe(assetList => {
      console.log(assetList);
      for (const asset of assetList) {
        this.assetList.push({ label: asset.name, value: asset });
      }
    });
  }

  changeDir(direction: string): void {
    console.log('change direction');
    this.orderStex.orderDir = direction;
    this.btnBuyClass = direction === 'BUY' ? 'btn-success' : 'btn-outline-success';
    this.btnSellClass = direction === 'SELL' ? 'btn-danger' : 'btn-outline-danger';
  }

  placeOrder(): void {

  }

  clearForm(clearStatus: boolean): void {

  }

  changeAsset(selectedAsset: ObjAsset): void {

  }
}
