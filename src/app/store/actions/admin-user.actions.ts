import {Action} from '@ngrx/store';
import {AdminUser, AdminUserLoginInterface} from '../../_models/adminUser';

export enum AdminUserActionTypes {
  LOGIN_ADMIN_USER = '[AdminUser] Load Admin User',
  LOGIN_ADMIN_USER_SUCCESS = '[AdminUser] Load Admin User Success',
  LOGIN_ADMIN_USER_FAIL = '[AdminUser] Load Admin User Fail'
}

export class Login implements Action {
  readonly type = AdminUserActionTypes.LOGIN_ADMIN_USER;
  constructor(public payload: AdminUserLoginInterface) {}
}

export class LoginSuccess implements Action {
  readonly type = AdminUserActionTypes.LOGIN_ADMIN_USER_SUCCESS;

  constructor(public payload: AdminUser) {}
}

export class LoginFail implements Action {
  readonly type = AdminUserActionTypes.LOGIN_ADMIN_USER_FAIL;

  constructor(public payload: string) {}
}

export type AdminUserActions = Login | LoginSuccess | LoginFail;
