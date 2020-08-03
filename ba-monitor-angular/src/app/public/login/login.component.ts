import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@services/auth.service';
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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.isLoading = true;
    if (this.authService.authenticate(this.user.username, this.user.password)
    ) {
      this.router.navigate(['person-base']);
    } else {
      this.message = 'login failed';
      this.isLoading = false;
    }

  }

  abortLogin(): void {
    this.isLoading = false;
  }
}
