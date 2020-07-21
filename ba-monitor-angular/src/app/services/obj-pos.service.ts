import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjPos } from '@models/objpos';
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
}
