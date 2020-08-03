import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(user: any): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + '/api/auth/' + 'signin', {
      username: user.username,
      password: user.password
    });
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('usertoken');
    return !(user === null);
  }

  logOut(): void {
    sessionStorage.removeItem('usertoken');
  }
}
