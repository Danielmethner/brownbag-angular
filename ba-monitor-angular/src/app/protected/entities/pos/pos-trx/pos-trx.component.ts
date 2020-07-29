import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ObjPos } from '@models/ObjPos';
import { Booking } from '@models/Booking';
import { ObjPosService } from '@services/obj-pos.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pos-trx',
  templateUrl: './pos-trx.component.html',
  styleUrls: ['./pos-trx.component.css']
})


export class PosTrxComponent implements OnInit {
  posList: SelectItem[];
  selectedPos: ObjPos;
  multiSortMeta: any[];
  bookList: Booking[];
  faSort = faSort;
  cols = [
    { header: 'ID', field: 'id', filter: true, classes: 'text-center max-width-20px', type: 'integer' },
    { header: 'Order ID', field: 'orderId', filter: true, classes: 'text-center max-width-20px', type: 'integer' },
    { header: 'Timestamp', field: 'timestamp', filter: true, classes: 'text-center max-width-20px', type: 'date' },
    { header: 'Book Text', field: 'bookText', filter: true, classes: 'text-center max-width-20px', type: 'text' },
    { header: 'Qty', field: 'qty', filter: true, classes: 'text-center max-width-20px', type: 'double' },
    { header: 'Balance Old', field: 'posBalOld', filter: true, classes: 'text-center max-width-20px', type: 'currency' },
    { header: 'Balance New', field: 'posBalNew', filter: true, classes: 'text-center max-width-20px', type: 'currency' }
  ];

  constructor(private objPosService: ObjPosService) {
    this.posList = [];
    this.bookList = [];
  }

  ngOnInit(): void {
    const partyId = 7; // Trader1
    // const posId = 15; // EUR position of PartyId = 7
    this.objPosService.getPosListByPartyId(partyId).subscribe(posList => {
      for (const pos of posList) {
        this.posList.push({ label: pos.name, value: pos });
      }
      this.selectedPos = posList[0];

      this.getBookList(this.selectedPos.partyId, this.selectedPos.id);
      this.multiSortMeta = [{ field: 'id', order: -1 }];
    });
  }

  getBookList(partyId, posId): void {

    this.objPosService.getBookingByPartyIdAndPosId(partyId, posId).subscribe(bookList => {
      this.bookList = bookList;
    });
  }

  onChangeCity(selectedPos): void {
    this.getBookList(7, selectedPos.id)
  }

}
