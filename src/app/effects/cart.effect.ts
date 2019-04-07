import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as cartAction from '../actions/cart.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadCart$: Observable<any> = this.actions$.pipe(
    ofType(cartAction.LOAD_CART),
    switchMap((action: cartAction.LoadCart) => {
      return this.http
        .get<any>(AppConfig.API_END_POINT + 'cart/' + action.id)
        .pipe(
          map((cart) => new cartAction.LoadCartSuccess(cart)),
          catchError((err) => null)
        );
    })
  );

  @Effect()
  poastCart$: Observable<any> = this.actions$.pipe(
    ofType(cartAction.POST_CART),
    switchMap((action: cartAction.PostCart) => {
      return this.http
        .post<any>(AppConfig.API_END_POINT + 'cart/', action.payload)
        .pipe(
          map((product) => new cartAction.PostcartSuccess()),
          catchError((err) => null)
        );
    })
  );
}
