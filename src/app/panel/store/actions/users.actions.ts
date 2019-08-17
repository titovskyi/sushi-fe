import {Action} from '@ngrx/store';
import {User} from '../../_models/user';

export enum UsersActionTypes {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAIL = '[User] Load Users Fail'
}

export class GetAllUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
  constructor() {}
}

export class GetAllUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: any[]) {}
}

export class GetAllUsersFail implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAIL;

  constructor(public payload: string) {}
}

export type UsersActions = GetAllUsers | GetAllUsersSuccess | GetAllUsersFail;
