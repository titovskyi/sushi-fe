import {Action} from '@ngrx/store';
import {StoreNews} from '../../_models/storeNews';

export enum StoreNewsActionTypes {
  LOAD_STORENEWS = '[News] Load News',
  LOAD_STORENEWS_SUCCESS = '[News] Load News Success',
  LOAD_STORENEWS_FAIL = '[News] Load News Fail',
  LOAD_ONESTORENEWS = '[News] Load One News',
  LOAD_ONESTORENEWS_SUCCESS = '[News] Load One News Success',
  LOAD_ONESTORENEWS_FAIL = '[News] Load One News Fail',
  CREATE_STORENEWS = '[News] Create News',
  CREATE_STORENEWS_SUCCESS = '[News] Create News Success',
  CREATE_STORENEWS_FAIL = '[News] Create News Fail',
  UPDATE_STORENEWS = '[News] Update News',
  UPDATE_STORENEWS_SUCCESS = '[News] Update News Success',
  UPDATE_STORENEWS_FAIL = '[News] Update News Fail',
  REMOVE_STORENEWS = '[News] Remove News',
  REMOVE_STORENEWS_SUCCESS = '[News] Remove News Success',
  REMOVE_STORENEWS_FAIL = '[News] Remove News Fail',
}

export class GetAllNews implements Action {
  readonly type = StoreNewsActionTypes.LOAD_STORENEWS;

  constructor() {}
}

export class GetAllNewsSuccess implements Action {
  readonly type = StoreNewsActionTypes.LOAD_STORENEWS_SUCCESS;

  constructor(public payload: StoreNews[]) {}
}

export class GetAllNewsFail implements Action {
  readonly type = StoreNewsActionTypes.LOAD_STORENEWS_FAIL;

  constructor(public payload: string) {}
}

export class GetOneNews implements Action {
  readonly type = StoreNewsActionTypes.LOAD_ONESTORENEWS;

  constructor(public payload: number) {}
}

export class GetOneNewsSuccess implements Action {
  readonly type = StoreNewsActionTypes.LOAD_ONESTORENEWS_SUCCESS;

  constructor(public payload: any) {}
}

export class GetOneNewsFail implements Action {
  readonly type = StoreNewsActionTypes.LOAD_ONESTORENEWS_FAIL;

  constructor(public payload: string) {}
}

export class CreateNews implements Action {
  readonly type = StoreNewsActionTypes.CREATE_STORENEWS;

  constructor(public payload: StoreNews) {}
}

export class CreateNewsSuccess implements Action {
  readonly type = StoreNewsActionTypes.CREATE_STORENEWS_SUCCESS;

  constructor(public payload: StoreNews) {}
}

export class CreateNewsFail implements Action {
  readonly type = StoreNewsActionTypes.CREATE_STORENEWS_FAIL;

  constructor(public payload: string) {}
}

export class UpdateNews implements Action {
  readonly type = StoreNewsActionTypes.UPDATE_STORENEWS;

  constructor(public payload: StoreNews) {}
}

export class UpdateNewsSuccess implements Action {
  readonly type = StoreNewsActionTypes.UPDATE_STORENEWS_SUCCESS;

  constructor(public payload: StoreNews) {}
}

export class UpdateNewsFail implements Action {
  readonly type = StoreNewsActionTypes.UPDATE_STORENEWS_FAIL;

  constructor(public payload: string) {}
}

export class RemoveNews implements Action {
  readonly type = StoreNewsActionTypes.REMOVE_STORENEWS;

  constructor(public payload: number) {}
}

export class RemoveNewsSuccess implements Action {
  readonly type = StoreNewsActionTypes.REMOVE_STORENEWS_SUCCESS;

  constructor(public payload: any) {}
}

export class RemoveNewsFail implements Action {
  readonly type = StoreNewsActionTypes.REMOVE_STORENEWS_FAIL;

  constructor(public payload: string) {}
}

export type StoreNewsActions =
  GetAllNews |
  GetAllNewsSuccess |
  GetAllNewsFail |
  GetOneNews |
  GetOneNewsSuccess |
  GetOneNewsFail |
  CreateNews |
  CreateNewsSuccess |
  CreateNewsFail |
  UpdateNews |
  UpdateNewsSuccess |
  UpdateNewsFail |
  RemoveNews |
  RemoveNewsSuccess |
  RemoveNewsFail;
