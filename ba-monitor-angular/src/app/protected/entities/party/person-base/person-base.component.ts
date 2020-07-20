import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-base',
  templateUrl: './person-base.component.html',
  styleUrls: ['./person-base.component.css']
})
export class PersonBaseComponent implements OnInit {

  personName = 'Bernd';
  constructor() { }

  ngOnInit(): void {
  }

}
