import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as productAction from "../actions/product.actions";
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private http: HttpClient) { }

    @Effect()
    loadProducts$: Observable<any> = this.actions$.pipe(
        ofType(productAction.LOAD_PRODUCT),
        switchMap(action =>
            this.http.get<any>(AppConfig.API_END_POINT + "product/").pipe(
                map(product => new productAction.LoadProductSuccess(product)),
                catchError(err => null)
            )
        )
    );
}