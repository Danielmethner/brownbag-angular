import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { ObjPartyService } from '@services/obj-party.service';
import { ObjUserService } from '@services/obj-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user = {
    username: 'U_TRADER_1',
    password: 'U_TRADER_1'
  };

  isLoading = false;
  message = null;

  constructor(private router: Router, private authService: AuthService, private objPartyService: ObjPartyService, private objUserService: ObjUserService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.isLoading = true;
    this.authService.logOut();
    this.authService.authenticate(this.user).subscribe(objUser => {

      this.objUserService.saveUser(objUser);

      this.objPartyService.getPrivatePerson().subscribe(userPerson => {
        this.objPartyService.savePrivatePersonToSessionStorage(userPerson);
        this.router.navigate(['person-base']);
      });

      this.isLoading = false;

    }, err => {
      this.message = 'Login failed: ' + err.error.status + ' ' + err.error.error;
      this.isLoading = false;
    });
  }

  abortLogin(): void {
    this.isLoading = false;
  }
}
