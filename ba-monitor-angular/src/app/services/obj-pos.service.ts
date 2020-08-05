import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjPos } from '@models/ObjPos';
import { ObjPosLoan } from '@models/ObjPosLoan';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Booking } from '@models/Booking';

@Injectable({
  providedIn: 'root'
})
export class ObjPosService {

  constructor(private http: HttpClient) { }

  getPosListByPartyId(partyId: number): Observable<ObjPos[]> {
    return this.http.get<ObjPos[]>(environment.apiBaseUrl + '/api/pos/party/' + partyId);
  }

  getPosLoanByPartyId(partyId: number): Observable<ObjPosLoan[]> {
    return this.http.get<ObjPosLoan[]>(environment.apiBaseUrl + '/api/pos/financing/party/' + partyId);
  }

  getBookingByPartyIdAndPosId(partyId: number, posId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(environment.apiBaseUrl + '/api/pos/bookings/party/' + partyId + '/pos/' + posId);
  }
}
