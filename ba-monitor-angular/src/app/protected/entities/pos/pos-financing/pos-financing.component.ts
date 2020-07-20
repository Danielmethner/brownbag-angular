import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos-financing',
  templateUrl: './pos-financing.component.html',
  styleUrls: ['./pos-financing.component.css']
})
export class PosFinancingComponent implements OnInit {

  tableData = [{ position: 1, name: 'My Position' }, { position: 2, name: 'My Other Position' }]
  constructor() { }

  ngOnInit(): void {
  }

}
