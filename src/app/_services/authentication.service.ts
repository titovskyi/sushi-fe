import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

import { AdminUser } from '../_models/adminUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    return localStorage.getItem('token');
  }

  login(userData): Observable<AdminUser> {
    return this.http.post<AdminUser>(`${environment.API}/api/auth/login`, userData);
  }
}
