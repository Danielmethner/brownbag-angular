import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private http: HttpClient) { }

  getLogs(): Observable<number> {
    return this.http.get<number>
      (environment.apiBaseUrl + '/api/settings/log/recent');
  }
  getCtrlVars(): Observable<number> {
    return this.http.get<number>(
      environment.apiBaseUrl + '/api/settings/ctrlvar');
  }

  getCtrlVarByEnum(enumKey) {
    return this.http.get<number>(
      environment.apiBaseUrl + '/api/settings/ctrlvar/' + enumKey);
  }

  getFinYear(): Observable<number> {
    return this.http.get<number>(
      environment.apiBaseUrl + '/api/settings/ctrlvar/finyear');
  }
  switchFinYear(): Observable<number> {
    return this.http.get<number>(
      environment.apiBaseUrl + '/api/settings/ctrlvar/finyear/switch');

  }

}
