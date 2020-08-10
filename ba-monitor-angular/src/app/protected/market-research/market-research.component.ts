import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ObjAsset } from '@models/ObjAsset';
import { ObjAssetService } from '@services/obj-asset.service';
import { ObjPartyService } from '@services/obj-party.service';
import { faChartPie, faList, faColumns } from '@fortawesome/free-solid-svg-icons';
import { ObjParty } from '@models/ObjParty';

@Component({
  selector: 'app-market-research',
  templateUrl: './market-research.component.html',
  styleUrls: ['./market-research.component.css']
})
export class MarketResearchComponent implements OnInit {

  assetList: SelectItem[];
  selectedBusiness: ObjParty;
  selectedAsset: ObjAsset;
  faChartPie = faChartPie; faList = faList; faColumns = faColumns;
  isLoading = false;

  constructor(private objAssetService: ObjAssetService, private objPartyService: ObjPartyService) { this.assetList = []; }

  ngOnInit(): void {
    this.selectedAsset = new ObjAsset();
    this.selectedBusiness = new ObjParty();

    this.objAssetService.getAllSec().subscribe(assetList => {
      for (const asset of assetList) {
        this.assetList.push({ label: asset.name, value: asset });
      }
      this.selectedAsset = assetList[0];
      this.onChange(this.selectedAsset);
    });
  }

  onChange(selectedAsset: ObjAsset): void {
    this.isLoading = true;
    this.selectedAsset = selectedAsset;
    this.objPartyService.getById(this.selectedAsset.issuerId).subscribe(objParty => {
      this.selectedBusiness = objParty;
      this.isLoading = false;
    });

  }
}
