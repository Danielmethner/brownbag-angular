import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ObjParty } from '@models/ObjParty';
import { EnumService } from '@services/enum.service';
import { ObjPartyService } from '@services/obj-party.service';

@Component({
  selector: 'app-business-new',
  templateUrl: './business-new.component.html',
  styleUrls: ['./business-new.component.css']
})

export class BusinessNewComponent implements OnInit {

  legalformList: SelectItem[];
  selectedLegalform: any;
  status: string;
  nomVal: number;
  legalFormDflt: any;
  privatePerson: ObjParty;
  multiSortMeta: any[];

  constructor(private enumService: EnumService, private objPartyService: ObjPartyService) {
    this.legalformList = [];
  }

  ngOnInit(): void {
    this.legalformList = [];
    this.privatePerson = this.objPartyService.getPrivatePersonFromSessionStorage();
    this.enumService.getLegalFormList().subscribe(legalformList => {
      for (const legalform of legalformList) {
        this.legalformList.push({ label: legalform.name, value: legalform });
      }
      this.selectedLegalform = this.legalformList[0];

      this.multiSortMeta = [{ field: 'id', order: -1 }];
    });
  }
  onChangeLF(selectedLegalform: any): void {
    this.selectedLegalform = selectedLegalform;
  }
}
