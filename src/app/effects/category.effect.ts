import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as categoryAction from '../actions/category.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable()
export class CategoryEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadCategories$: Observable<any> = this.actions$.pipe(
    ofType(categoryAction.LOAD_CATEGORY),
    switchMap((action) =>
      this.http.get<any>(AppConfig.API_END_POINT + 'category/').pipe(
        map((category) => new categoryAction.LoadCategorySuccess(category)),
        catchError((err) => null)
      )
    )
  );
}
