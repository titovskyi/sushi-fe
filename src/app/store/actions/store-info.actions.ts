import {Action} from '@ngrx/store';
import {StoreInfo} from '../../_models/storeInfo';

export enum StoreInfoActionsTypes {
  LOAD_INFO = '[StoreInfo] Load Store Info',
  LOAD_INFO_SUCCESS = '[StoreInfo] Load Store Info Success',
  LOAD_INFO_FAIL = '[StoreInfo] Load Store Info Fail',
  UPDATE_INFO = '[StoreInfo] Edit Store Info',
  UPDATE_INFO_SUCCESS = '[StoreInfo] Edit Store Info Success',
  UPDATE_INFO_FAIL = '[StoreInfo] Edit Store Info Fail'
};

export class GetStoreInfo implements Action {
  readonly type = StoreInfoActionsTypes.LOAD_INFO;

  constructor() {}
}
export class GetStoreInfoSuccess implements Action {
  readonly type = StoreInfoActionsTypes.LOAD_INFO_SUCCESS;

  constructor(public payload: StoreInfo) {}
}
export class GetStoreInfoFail implements Action {
  readonly type = StoreInfoActionsTypes.LOAD_INFO_FAIL;

  constructor(public payload: string) {}
}

export class UpdateStoreInfo implements Action {
  readonly type = StoreInfoActionsTypes.UPDATE_INFO;

  constructor(public payload: StoreInfo) {}
}

export class UpdateStoreInfoSuccess implements Action {
  readonly type = StoreInfoActionsTypes.UPDATE_INFO_SUCCESS;

  constructor(public payload: StoreInfo) {}
}

export class UpdateStoreInfoFail implements Action {
  readonly type = StoreInfoActionsTypes.UPDATE_INFO_FAIL;

  constructor(public payload: string) {}
}

export type StoreInfoActions =
  GetStoreInfo |
  GetStoreInfoSuccess |
  GetStoreInfoFail |
  UpdateStoreInfo |
  UpdateStoreInfoSuccess |
  UpdateStoreInfoFail;
