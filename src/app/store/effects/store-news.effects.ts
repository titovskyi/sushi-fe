import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StoreNewsService} from '../../_services/store-news.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  CreateNews, CreateNewsFail, CreateNewsSuccess,
  GetAllNews,
  GetAllNewsFail, GetAllNewsSuccess,
  GetOneNews,
  GetOneNewsFail,
  GetOneNewsSuccess, RemoveNews, RemoveNewsFail, RemoveNewsSuccess,
  StoreNewsActionTypes, UpdateNews, UpdateNewsFail, UpdateNewsSuccess
} from '../actions/store-news.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {StoreNews} from '../../_models/storeNews';
import {AddError} from '../actions/error.actions';

@Injectable()
export class StoreNewsEffects {
  constructor(
    private actions$: Actions,
    private storeNewsService: StoreNewsService
  ) {}

  @Effect()
  getAllStoreNews$: Observable<Action> = this.actions$.pipe(
    ofType<GetAllNews>(StoreNewsActionTypes.LOAD_STORENEWS),
    mergeMap(() => {
      return this.storeNewsService.getAllNews().pipe(
        map((news: StoreNews[]) => new GetAllNewsSuccess(news)),
        catchError((err) => of(new GetAllNewsFail(err)))
      );
    })
  );

  @Effect()
  getOneStoreNews$: Observable<Action> = this.actions$.pipe(
    ofType<GetOneNews>(StoreNewsActionTypes.LOAD_ONESTORENEWS),
    map((action: GetOneNews) => action.payload),
    mergeMap((storeNewsId: number) => {
      return this.storeNewsService.getOneNews(storeNewsId).pipe(
        map((oneStoreNews: StoreNews) => new GetOneNewsSuccess(oneStoreNews)),
        catchError((err) => of(new AddError(err)))
      );
    })
  );

  // @ts-ignore
  @Effect()
  createStoreNews$: Observable<Action> = this.actions$.pipe(
    ofType<CreateNews>(StoreNewsActionTypes.CREATE_STORENEWS),
    map((action: any) => action.payload),
    mergeMap((storeNews: StoreNews) => {
      return this.storeNewsService.createStoreNews(storeNews).pipe(
        map((newStoreNews: StoreNews) => new CreateNewsSuccess(newStoreNews)),
        catchError((err) => of(new AddError(err)))
      );
    })
  );

  @Effect()
  updateStoreNews$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateNews>(StoreNewsActionTypes.UPDATE_STORENEWS),
    map((action: any) => action.payload),
    mergeMap((storeNews: StoreNews) => {
      return this.storeNewsService.updateStoreNews(storeNews).pipe(
        map((updatedStoreNews: StoreNews) => new UpdateNewsSuccess(updatedStoreNews)),
        catchError((err) => of(new AddError(err)))
      );
    })
  );

  @Effect()
  removeStoreNews$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveNews>(StoreNewsActionTypes.REMOVE_STORENEWS),
    map((action: any) => action.payload),
    mergeMap((storeNewsId: number) => {
      return this.storeNewsService.removeNews(storeNewsId).pipe(
        map((result: any) => new RemoveNewsSuccess(storeNewsId)),
        catchError((err) => of(new AddError(err)))
      );
    })
  );

}
