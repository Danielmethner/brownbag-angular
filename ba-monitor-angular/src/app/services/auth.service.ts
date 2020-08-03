import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === 'U_TRADER_1' && password === 'U_TRADER_1') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    console.log(user);
    return !(user === null);
  }

  logOut(): void {
    sessionStorage.removeItem('username');
  }
}
