import {Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';

import {AuthenticationService} from '../../_services/authentication.service';
import {AdminUserActions, AdminUserActionTypes, Login, LoginFail, LoginSuccess} from '../actions/admin-user.actions';
import {AdminUser} from '../../_models/adminUser';

@Injectable()
export class AdminUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  @Effect()
  loginAdminUser$: Observable<Action> = this.actions$.pipe(
    ofType<Login>(AdminUserActionTypes.LOGIN_ADMIN_USER),
    map((action: Login) => {
      return action.payload;
    }),
    mergeMap((action) => {
      return this.authService.login(action).pipe(
        map((adminUser: AdminUser) => {
          return new LoginSuccess(adminUser);
        }),
        catchError((err) => {
          return of(new LoginFail(err));
        })
      );
    })
  );
}
