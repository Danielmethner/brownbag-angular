import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { FinStmt } from '@models/FinStmt';
import { ObjParty } from '@models/ObjParty';
import { ObjUserService } from '@services/obj-user.service';

@Injectable({
  providedIn: 'root'
})
export class ObjPartyService {

  constructor(private http: HttpClient, private objUserService: ObjUserService) { }

  getLogs(): Observable<number> {
    return this.http.get<number>
      (environment.apiBaseUrl + '/api/settings/log/recent');
  }

  getOwnershipList(partyId: number): Observable<ObjParty> {
    return this.http.get<ObjParty>(environment.apiBaseUrl + '/api/party/' + partyId + '/ownership');
  }

  getCredFacility(partyId: number): Observable<ObjParty> {
    return this.http.get<ObjParty>(environment.apiBaseUrl + '/api/party/cred-facility/party/' + partyId);
  }

  createParty(party: number): Observable<ObjParty> {
    return this.http.post<ObjParty>(environment.apiBaseUrl + '/api/party/legalperson/create', party);
  }

  getLegalPersonByOwnerUser(): Observable<ObjParty[]> {
    return this.http.get<ObjParty[]>(environment.apiBaseUrl + '/api/party/user/legalpersonlist', { headers: this.objUserService.getAuthHeader() });
  }

  getAll(): Observable<ObjParty> {
    return this.http.get<ObjParty>(environment.apiBaseUrl + '/api/party/all');
  }

  savePrivatePersonToSessionStorage(userPerson: ObjParty): void {
    sessionStorage.setItem('userPerson', JSON.stringify(userPerson));
  }

  getPrivatePersonFromSessionStorage(): ObjParty {
    return JSON.parse(sessionStorage.getItem('userPerson'));
  }
  getPrivatePerson(): Observable<ObjParty> {
    return this.http.get<ObjParty>(environment.apiBaseUrl + '/api/party/priv', { headers: this.objUserService.getAuthHeader() });
  }

  getById(partyId: number): Observable<ObjParty> {
    return this.http.get<ObjParty>(environment.apiBaseUrl + '/api/party/' + partyId);
  }

  getAvblQty(partyId: number, assetId: number): Observable<number> {
    return this.http.get<number>(environment.apiBaseUrl + '/api/party/' + partyId + '/asset/' + assetId + '/qty/avbl');
  }

  getBalSheetByPartyId(partyId: number): Observable<number> {
    return this.http.get<number>(environment.apiBaseUrl + '/api/fin-stmt/balsheet/party/' + partyId);
  }

  getBalSheetByPartyIdPrev(partyId: number): Observable<number> {
    return this.http.get<number>(environment.apiBaseUrl + '/api/fin-stmt/balsheet/prev/party/' + partyId);
  }

  getFinStmtByPartyIdAndFinYearAndFinStmtType(partyId: number, finYear: number, finStmtType: string): Observable<FinStmt[]> {
    return this.http.get<FinStmt[]>(environment.apiBaseUrl + '/api/fin-stmt/type/' + finStmtType + '/finyear/' + finYear + '/party/' + partyId);
  }

  getFinStmtByPartyIdAndFinYearAndFinStmtTypeHist(partyId: number, finYear: number, finStmtType: string, histCnt: number): Observable<FinStmt[]> {
    return this.http.get<FinStmt[]>(environment.apiBaseUrl + '/api/fin-stmt/type/' + finStmtType + '/finyear/' + finYear + '/party/' + partyId + '/hist-cnt/' + histCnt);
  }
}
