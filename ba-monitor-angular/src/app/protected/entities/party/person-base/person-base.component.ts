import { Component, OnInit } from '@angular/core';
import { faChartPie, faCreditCard, faExchangeAlt, faFile, faColumns, faList } from '@fortawesome/free-solid-svg-icons';
import { ObjPartyService } from '@services/obj-party.service';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-person-base',
  templateUrl: './person-base.component.html',
  styleUrls: ['./person-base.component.css']
})
export class PersonBaseComponent implements OnInit {
  faChartPie = faChartPie;
  faExchangeAlt = faExchangeAlt;
  faCreditCard = faCreditCard;
  faFile = faFile; faColumns = faColumns; faList = faList;
  privatePerson: ObjParty;

  constructor(private objPartyService: ObjPartyService) { }

  ngOnInit(): void {
    this.privatePerson = this.objPartyService.getPrivatePersonFromSessionStorage();
  }

}
