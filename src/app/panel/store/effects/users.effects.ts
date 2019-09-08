import {Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';

import { UserService} from '../../_services/user.service';
import {
  UsersActions,
  UsersActionTypes,
  GetAllUsers,
  GetAllUsersSuccess,
  GetAllUsersFail,
  CreateUser,
  CreateUserSuccess,
  CreateUserFail,
  UpdateUser,
  UpdateUserSuccess,
  UpdateUserFail, RemoveUser, RemoveUserSuccess, RemoveUserFail
} from '../actions/users.actions';
import {User} from '../../_models/user';
import {AddError} from '../../../store/actions/error.actions';

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
      return this.userService.getAllUsers().pipe(
        map((users: any) => new GetAllUsersSuccess(users)),
        catchError((err) => of(new GetAllUsersFail(err)))
      );
    })
  );

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<CreateUser>(UsersActionTypes.CREATE_USER),
    map((action: CreateUser) => action.payload),
    mergeMap((user: User) => {
      return this.userService.createUser(user).pipe(
        map( (newUser: User) => new CreateUserSuccess(newUser)),
        catchError(err => of(new AddError(err)))
      );
    })
  );

  @Effect()
  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateUser>(UsersActionTypes.UPDATE_USER),
    map((action: UpdateUser) => action.payload),
    mergeMap((user: User) => {
      return this.userService.updateUser(user).pipe(
        map((updateUser: User) => new UpdateUserSuccess(updateUser)),
        catchError(err => of(new AddError(err)))
      )
    })
  );

  @Effect()
  removeUser$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveUser>(UsersActionTypes.REMOVE_USER),
    map((action: RemoveUser) => action.payload),
    mergeMap((userId: number) => {
      return this.userService.removeUser(userId).pipe(
        map((result: any) => new RemoveUserSuccess(userId)),
        catchError(err => of(new AddError(err)))
      );
    })
  );
}


