import { Component, OnInit, Input } from '@angular/core';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-pos-financing-base',
  templateUrl: './pos-financing-base.component.html',
  styleUrls: ['./pos-financing-base.component.css']
})
export class PosFinancingBaseComponent implements OnInit {

  finParty: ObjParty;

  @Input() set objParty(objParty: ObjParty) {
    this.setFinParty(objParty);
  }
  constructor() { }

  ngOnInit(): void {
  }

  setFinParty(myParty: ObjParty): void {
    this.finParty = myParty;
  }

}
