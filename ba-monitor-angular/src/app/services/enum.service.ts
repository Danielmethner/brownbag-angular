import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor(private http: HttpClient) { }

  getLegalFormList(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiBaseUrl + '/api/enum/legalform/all');
  }

}
