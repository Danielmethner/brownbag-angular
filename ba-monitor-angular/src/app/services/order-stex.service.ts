import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderStex } from '@models/OrderStex';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderStexService {

  constructor(private http: HttpClient) { }
  
  geOrderStexByParty(partyId: number): Observable<OrderStex[]> {
    return this.http.get<OrderStex[]>(environment.apiBaseUrl + '/api/order/stex/party/' + partyId);
  }
}
