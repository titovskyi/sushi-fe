import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

import {StoreInfo} from '../_models/storeInfo';

@Injectable({
  providedIn: 'root'
})
export class StoreInfoService {

  constructor(
    private http: HttpClient
  ) { }

  getStoreInfo(): Observable<StoreInfo[]> {
    return this.http.get<StoreInfo[]>(`${environment.PANEL_STORE_INFO}`);
  }

  updateStoreInfo(info: StoreInfo): Observable<StoreInfo> {
    return this.http.patch<StoreInfo>(`${environment.PANEL_STORE_INFO}`, info);
  }
}
