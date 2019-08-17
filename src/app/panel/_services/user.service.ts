import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';

import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  GetAllUsers() {
    return this.http.get<User>(`${environment.API}/api/user`);
  }
}
