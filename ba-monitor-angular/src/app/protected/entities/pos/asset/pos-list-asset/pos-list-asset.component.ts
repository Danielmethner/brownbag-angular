import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ObjPos } from '@models/objpos';
import { ObjPosService } from '@services/obj-pos.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-pos-list-asset',
  templateUrl: './pos-list-asset.component.html',
  styleUrls: ['./pos-list-asset.component.css']
})
export class PosListAssetComponent implements OnInit {

  @Input() set objParty(objParty: ObjParty) {
    this.getPosListAsset(objParty);
  }
  faSort = faSort;
  posList: ObjPos[];
  cols: any[];
  multiSortMeta: any[];

  constructor(private objPosService: ObjPosService) {
  }

  ngOnInit(): void {
    this.getPosListAsset(this.objParty);


    this.cols = [
      { field: 'id', header: 'ID', filter: true, classes: 'text-center max-width-20px', type: 'integer' },
      { field: 'assetName', header: 'Asset', filter: true, classes: 'text-left', type: 'text' },
      { field: 'qty', header: 'Qty', filter: true, classes: 'text-right', type: 'double' },
      { field: 'qtyBlocked', header: 'Qty Blocked', filter: true, classes: 'text-right', type: 'double' },
      { field: 'priceAvg', header: 'Avg Price', filter: true, classes: 'text-right', type: 'currency' },
      { field: 'priceLast', header: 'Last Price', filter: true, classes: 'text-right', type: 'currency' },
      { field: 'profitLoss', header: 'P/ L', filter: false, classes: 'text-right', type: 'percent' }
    ];

    this.multiSortMeta = [{ field: 'id', order: 1 }];

  }

  getPosListAsset(party: ObjParty): void {
    if (party != null && party.id != null) {
      this.objPosService.getPosListByPartyId(party.id).subscribe(posList =>
        this.posList = posList
      );
    }
  }

}
