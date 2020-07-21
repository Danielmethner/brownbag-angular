import { Component, OnInit } from '@angular/core';
import { faChartPie, faCreditCard, faExchangeAlt, faFile, faColumns, faList } from '@fortawesome/free-solid-svg-icons';
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
  personName = 'Bernd';
  constructor() { }

  ngOnInit(): void {
  }

}
