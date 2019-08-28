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
    return this.http.get<User[]>(`${environment.USER}`);
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${environment.USER}`, newUser);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${environment.USER}/${user.id}`, user);
  }

  removeUser(userId: number) {
    return this.http.delete<any>(`${environment.USER}/${userId}`);
  }
}
