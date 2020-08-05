import { Component, OnInit, Input } from '@angular/core';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-pos-financing-base',
  templateUrl: './pos-financing-base.component.html',
  styleUrls: ['./pos-financing-base.component.css']
})
export class PosFinancingBaseComponent implements OnInit {

  @Input() objParty: ObjParty;

  constructor() { }

  ngOnInit(): void {
  }

}
