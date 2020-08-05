import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ObjPosLoan } from '@models/ObjPosLoan';
import { ObjPosService } from '@services/obj-pos.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-pos-list-liab',
  templateUrl: './pos-list-liab.component.html',
  styleUrls: ['./pos-list-liab.component.css']
})
export class PosListLiabComponent implements OnInit {
  @Input() objParty: ObjParty;

  faSort = faSort;
  posList: ObjPosLoan[];
  cols: any[];
  multiSortMeta: any[];

  constructor(private objPosService: ObjPosService) {
  }

  ngOnInit() {
    this.objPosService.getPosLoanByPartyId(this.objParty.id).subscribe(posList =>
      this.posList = posList
    );


    this.cols = [
      { field: 'id', header: 'ID', filter: true, classes: 'text-center max-width-20px', type: 'integer' },
      { field: 'lenderName', header: 'Lender', filter: true, classes: 'text-left', type: 'text' },
      { field: 'intrRate', header: 'Intr. Rate', filter: true, classes: 'text-right', type: 'percent' },
      { field: 'balance', header: 'Balance', filter: true, classes: 'text-right', type: 'currency' },
      { field: 'principal', header: 'Principal', filter: true, classes: 'text-right', type: 'currency' },
      { field: 'matDate', header: 'Maturity', filter: true, classes: 'text-right', type: 'date' }
    ];

    this.multiSortMeta = [{ field: 'id', order: 1 }];

  }


}
