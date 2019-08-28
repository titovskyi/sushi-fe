import {Action} from '@ngrx/store';
import {User} from '../../_models/user';

export enum UsersActionTypes {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAIL = '[User] Load Users Fail',
  CREATE_USER = '[User] Create User',
  CREATE_USER_SUCCESS = '[User] Create User Success',
  CREATE_USER_FAIL = '[User] Create User Fail',
  UPDATE_USER = '[User] Update User',
  UPDATE_USER_SUCCESS = '[User] Update User Success',
  UPDATE_USER_FAIL = '[User] Update User Fail',
  REMOVE_USER = '[User] Remove User',
  REMOVE_USER_SUCCESS = '[User] Remove User Success',
  REMOVE_USER_FAIL = '[User] Remove User Fail',
}

export class GetAllUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;

  constructor() {}
}

export class GetAllUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {}
}

export class GetAllUsersFail implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAIL;

  constructor(public payload: string) {}
}

export class CreateUser implements Action {
  readonly type = UsersActionTypes.CREATE_USER;

  constructor(public payload: User) {}
}

export class CreateUserSuccess implements Action {
  readonly type = UsersActionTypes.CREATE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class CreateUserFail implements Action {
  readonly type = UsersActionTypes.CREATE_USER_FAIL;

  constructor(public payload: string) {}
}

export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UPDATE_USER;

  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UsersActionTypes.UPDATE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class UpdateUserFail implements Action {
  readonly type = UsersActionTypes.UPDATE_USER_FAIL;

  constructor(public payload: string) {}
}

export class RemoveUser implements Action {
  readonly type = UsersActionTypes.REMOVE_USER;

  constructor(public payload: number) {}
}

export class RemoveUserSuccess implements Action {
  readonly type = UsersActionTypes.REMOVE_USER_SUCCESS;

  constructor(public payload: any) {}
}

export class RemoveUserFail implements Action {
  readonly type = UsersActionTypes.REMOVE_USER_FAIL;

  constructor(public payload: string) {}
}

export type UsersActions =
  GetAllUsers |
  GetAllUsersSuccess |
  GetAllUsersFail |
  CreateUser |
  CreateUserSuccess |
  CreateUserFail |
  UpdateUser |
  UpdateUserSuccess |
  UpdateUserFail |
  RemoveUser |
  RemoveUserSuccess |
  RemoveUserFail;
