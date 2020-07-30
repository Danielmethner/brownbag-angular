import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { ObjAsset } from '@models/ObjAsset';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjAssetService {

  constructor(private http: HttpClient) { }

  getAllSec(): Observable<ObjAsset[]> {
    return this.http.get<ObjAsset[]>(environment.apiBaseUrl + '/api/asset/sec/all');
  }
}
