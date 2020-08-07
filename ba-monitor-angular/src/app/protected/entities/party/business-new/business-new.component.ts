import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-new',
  templateUrl: './business-new.component.html',
  styleUrls: ['./business-new.component.css']
})
export class BusinessNewComponent implements OnInit {

  status: string;
  nomVal: number;
  legalFormDflt: string;
  constructor() { }

  ngOnInit(): void {
  }

}
