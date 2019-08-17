import {Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';

import { UserService} from '../../_services/user.service';
import {UsersActions, UsersActionTypes, GetAllUsers, GetAllUsersSuccess, GetAllUsersFail} from '../actions/users.actions';
import {User} from '../../_models/user';
import {log} from 'util';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect()
  getAllUsers$: Observable<Action> = this.actions$.pipe(
    ofType<GetAllUsers>(UsersActionTypes.LOAD_USERS),
    mergeMap(() => {
      return this.userService.GetAllUsers().pipe(
        map((users: any) => {
          return new GetAllUsersSuccess(users);
        }),
        catchError((err) => {
          return of(new GetAllUsersFail(err));
        })
      );
    })
  );

}


