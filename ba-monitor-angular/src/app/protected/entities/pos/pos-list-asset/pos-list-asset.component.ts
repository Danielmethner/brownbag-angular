import { Component, OnInit, Injectable } from '@angular/core';
import { ObjPos } from '@models/objpos';
import { ObjPosService } from '@services/obj-pos.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pos-list-asset',
  templateUrl: './pos-list-asset.component.html',
  styleUrls: ['./pos-list-asset.component.css']
})
export class PosListAssetComponent implements OnInit {

  faSort = faSort;
  posList: ObjPos[];
  cols: any[];
  multiSortMeta: any[];

  constructor(private objPosService: ObjPosService) {
  }

  ngOnInit() {
    this.objPosService.getPosList().subscribe(posList =>
      this.posList = posList
    );


    this.cols = [
      { field: 'id', header: 'ID', filter: true },
      { field: 'assetName', header: 'Asset', filter: true },
      { field: 'qty', header: 'Qty', filter: true },
      { field: 'qtyBlocked', header: 'Qty Blocked', filter: true },
      { field: 'priceAvg', header: 'Avg Price', filter: true },
      { field: 'priceLast', header: 'Last Price', filter: true },
      { field: 'profitLoss', header: 'P/ L' }
    ];

    this.multiSortMeta = [{ field: 'id', order: 1 }];

  }

}
