import {Action} from '@ngrx/store';

export enum ErrorActionsType {
  ADD_ERROR = '[Error] Add Error',
  REMOVE_ERROR = '[Error] Remove Error'
};

export class AddError implements Action {
  readonly type = ErrorActionsType.ADD_ERROR;

  constructor(public payload: string) {}
}

export class RemoveError implements Action {
  readonly  type = ErrorActionsType.REMOVE_ERROR;

  constructor() {}
}

export type ErrorActions =
  AddError |
  RemoveError;
