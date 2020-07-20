import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos-list-asset',
  templateUrl: './pos-list-asset.component.html',
  styleUrls: ['./pos-list-asset.component.css']
})
export class PosListAssetComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  tableData = [
    { position: 1, name: 'My Position' },
    { position: 2, name: 'My Other Position' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
