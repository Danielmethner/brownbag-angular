import { Injectable } from '@angular/core';
import { ObjUser } from '@models/ObjUser';

@Injectable({
  providedIn: 'root'
})
export class ObjUserService {

  constructor() { }

  getAuthHeader(): any {
    const usertoken = sessionStorage.getItem('usertoken');
    return { Authorization: 'Bearer ' + usertoken };
  }

  saveUser(objUser: ObjUser): void {
    sessionStorage.setItem('usertoken', objUser.accessToken);
    sessionStorage.setItem('objUser', JSON.stringify(objUser));
  }

  getUser(): ObjUser {
    return JSON.parse(sessionStorage.getItem('objUser'));
  }
}
