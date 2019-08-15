import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

import { User } from '../_models/user';

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

  login(userData): Observable<User> {
    return this.http.post<User>(`${environment.API}/api/auth/login`, userData);
  }
}
