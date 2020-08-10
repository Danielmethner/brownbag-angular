import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderStex } from '@models/OrderStex';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
const ORDER_STEX_PLACE = '/api/order/stex/place';
const ORDER_LOAN_PLACE = '/api/order/loan/place';
const ORDER_GET_BY_USER = '/api/order/stex/user'
const ORDER_GET_BY_PARTY = '/api/order/stex/party/'
const ORDER_GET_PLACED_AND_ASSET = '/api/order/stex/placed/asset/'
const ORDER_STEX = '/api/order/stex/'
const ORDER_DISC = '/disc'
const ORDER_MATCH_BUY = '/api/order/stex/match/buy/';
const SELL = '/sell/';
@Injectable({
  providedIn: 'root'
})
export class OrderStexService {

  constructor(private http: HttpClient) { }
  
  geOrderStexByParty(partyId: number): Observable<OrderStex[]> {
    return this.http.get<OrderStex[]>(environment.apiBaseUrl + '/api/order/stex/party/' + partyId);
  }
  getOrdersByPlacedAndAsset(assetId: number): Observable<OrderStex[]> {
    return this.http.get<OrderStex[]>(environment.apiBaseUrl + ORDER_GET_PLACED_AND_ASSET + assetId);
  }
  // placeOrder(order) {
  //   return axios
  //     .post(GLOBAL.API_BASE_URL + ORDER_STEX_PLACE, order, { headers: jsonHeader() });
  // }

  // placeOrderLoan(order) {
  //       return axios
  //     .post(GLOBAL.API_BASE_URL + ORDER_LOAN_PLACE, order, { headers: jsonHeader() });
  // }

  // discardOrder(orderId) {
  //   return axios
  //     .get(GLOBAL.API_BASE_URL + ORDER_STEX + orderId + ORDER_DISC, { headers: jsonHeader() });
  // }

  // getOrdersByUser() {
  //   return axios
  //     .get(GLOBAL.API_BASE_URL + ORDER_GET_BY_USER, { headers: jsonHeader() });
  // }

  // getByParty(partyId) {
  //   if (partyId != null) {
  //     return axios
  //       .get(GLOBAL.API_BASE_URL + ORDER_GET_BY_PARTY + partyId, { headers: jsonHeader() });
  //   } else {
  //     return null;
  //   }
  // }


  // matchOrders(orderBuyId, orderSellId) {
  //   if (orderBuyId == null || orderSellId == null) {
  //     return null;
  //   } else {
  //     return axios
  //       .get(GLOBAL.API_BASE_URL + ORDER_MATCH_BUY + orderBuyId + SELL + orderSellId, { headers: jsonHeader() });
  //   }
  // }
}
