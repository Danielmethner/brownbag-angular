import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjPos } from '@models/ObjPos';
import { ObjPosLoan } from '@models/ObjPosLoan';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjPosService {

  constructor(private http: HttpClient) { }

  getPosList(): Observable<ObjPos[]> {
    return this.http.get<ObjPos[]>(environment.apiBaseUrl + '/api/pos/party/7');
  }

  getPosLoanByPartyId(): Observable<ObjPosLoan[]> {
    return this.http.get<ObjPosLoan[]>(environment.apiBaseUrl + '/api/pos/financing/party/7');
  }


}
