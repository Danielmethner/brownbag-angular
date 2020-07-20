import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  faCheck = faCheck;
  benefitList = [
    { text: 'Trade on your personal account or create companies' },
    { text: 'Issue, buy & sell shares' },
    { text: 'Issue bonds' },
    { text: 'Take out loans' },
    {
      text: 'Cost based balance sheet & income statement'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
