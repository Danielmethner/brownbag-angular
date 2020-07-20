import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  faUserCircle = faUserCircle;
  privatePerson = {
    id: 1,
    name: 'Bernd',
    partyType: 'Person'
  };
  currentUser = {
    id: 3,
    username: 'U_BERND',
    accessToken: 'GFWETG512342343',
    roles: [
      'TRADER'
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
