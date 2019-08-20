import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StoreInfoService} from '../../_services/store-info.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetStoreInfo,
  GetStoreInfoFail,
  GetStoreInfoSuccess,
  StoreInfoActionsTypes,
  UpdateStoreInfo, UpdateStoreInfoFail,
  UpdateStoreInfoSuccess
} from '../actions/store-info.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {StoreInfo} from '../../_models/storeInfo';

@Injectable()
export class StoreInfoEffects {
  constructor(
    private actions$: Actions,
    private storeInfoService: StoreInfoService
  ) {}

  @Effect()
  getStoreInfo$: Observable<Action> = this.actions$.pipe(
    ofType<GetStoreInfo>(StoreInfoActionsTypes.LOAD_INFO),
    mergeMap(() => {
      return this.storeInfoService.getStoreInfo().pipe(
        map((info: any) => new GetStoreInfoSuccess((info))),
        catchError((err) => of(new GetStoreInfoFail(err)))
      );
    })
  );

  @Effect()
  updateStoreInfo$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateStoreInfo>(StoreInfoActionsTypes.UPDATE_INFO),
    map((action: UpdateStoreInfo) => action.payload),
    mergeMap((info: StoreInfo) => {
      return this.storeInfoService.updateStoreInfo(info).pipe(
        map((updateInfo: StoreInfo) => new UpdateStoreInfoSuccess(updateInfo)),
        catchError((err) => of(new UpdateStoreInfoFail(err)))
      );
    })
  );
}
