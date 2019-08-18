import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';

import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.PANEL_USER}`);
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${environment.PANEL_USER}`, newUser);
  }

  updateUser(user: User): Observable<User> {
    console.log(user, 'service');
    return this.http.patch<User>(`${environment.PANEL_USER}/${user.id}`, user);
  }

  removeUser(userId: number) {
    return this.http.delete<any>(`${environment.PANEL_USER}/${userId}`);
  }
}
