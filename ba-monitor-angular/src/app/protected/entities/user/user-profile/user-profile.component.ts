import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ObjPartyService } from '@services/obj-party.service';
import { ObjParty } from '@models/ObjParty';
import { ObjUser } from '@models/ObjUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  faUserCircle = faUserCircle;
  privatePerson: ObjParty;
  currentUser: ObjUser;
  
  constructor(private objPartyService: ObjPartyService) { }

  ngOnInit(): void {
    this.privatePerson = this.objPartyService.getPrivatePersonFromSessionStorage();
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.privatePerson);
  }

}
