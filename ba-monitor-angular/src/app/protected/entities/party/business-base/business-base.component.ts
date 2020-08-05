import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ObjParty } from '@models/ObjParty';
import { ObjPartyService } from '@services/obj-party.service';
import { faChartPie, faCreditCard, faExchangeAlt, faFile, faColumns, faList } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-business-base',
  templateUrl: './business-base.component.html',
  styleUrls: ['./business-base.component.css']
})
export class BusinessBaseComponent implements OnInit {
  businessList: SelectItem[];
  selectedBusiness: ObjParty;
  faChartPie = faChartPie;
  faExchangeAlt = faExchangeAlt;
  faCreditCard = faCreditCard;
  faFile = faFile; faColumns = faColumns; faList = faList;

  constructor(private objPartyService: ObjPartyService) {
    this.businessList = [];
  }

  ngOnInit(): void {
    this.selectedBusiness = new ObjParty();
    this.objPartyService.getLegalPersonByOwnerUser().subscribe(businessList => {
      for (const business of businessList) {
        this.businessList.push({ label: business.name, value: business });
      }
      this.selectedBusiness = businessList[0];

    });
  }

  onChangeParty(selectedBusiness: ObjParty): void {
    this.selectedBusiness = selectedBusiness;

  }
}
