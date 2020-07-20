import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user = {
      name: 'U_TRADER_1',
      password: 'U_TRADER_1'
    };

  isLoading = false;
  message = null;
  constructor() { }

  ngOnInit(): void {
  }

}
