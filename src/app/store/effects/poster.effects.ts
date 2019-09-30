import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PosterService} from '../../_services/poster.service';
import {
  GetPosterCategoriesSuccess,
  GetPosterCategoriesFail,
  PosterActionTypes,
  GetPosterCategories,
  GetPosterProducts, GetPosterProductsSuccess, GetPosterProductsFail
} from '../actions/poster.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class PosterEffects {
  constructor(
    private action$: Actions,
    private posterService: PosterService
  ) {}

  @Effect()
  getAllCategories$: Observable<Action> = this.action$.pipe(
    ofType<GetPosterCategories>(PosterActionTypes.LOAD_CATEGORIES),
    mergeMap(() => {
      return this.posterService.getCategories().pipe(
        map((categories) => new GetPosterCategoriesSuccess(categories)),
        catchError((err) => of(new GetPosterCategoriesFail(err)))
      );
    })
  );

  @Effect()
  getProducts$: Observable<Action> = this.action$.pipe(
    ofType<GetPosterProducts>(PosterActionTypes.LOAD_PRODUCTS),
    mergeMap(() => {
      return this.posterService.getProducts().pipe(
        map((products) => new GetPosterProductsSuccess(products)),
        catchError((err) => of(new GetPosterProductsFail(err)))
      );
    })
  );
}
