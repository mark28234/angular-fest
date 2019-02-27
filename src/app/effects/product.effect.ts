import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as productAction from "../actions/product.actions";
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable()
export class ProductEffects {
public searchTerm:string;
public categories:string[];
    constructor(private actions$: Actions, private http: HttpClient) { }

    @Effect()
    loadProducts$: Observable<any> = this.actions$.pipe(
        ofType(productAction.LOAD_PRODUCT),
        switchMap((action:productAction.LoadProduct) => {
            this.searchTerm = action.searchTerm;
            this.categories = action.categories;
            return this.http.get<any>(AppConfig.API_END_POINT + "product/").pipe(
                map(product => new productAction.LoadProductSuccess(product,this.searchTerm,this.categories)
                ),
                catchError(err => null)
            )
        }
        )
    );

    @Effect()
    loadProductsDetail$: Observable<any> = this.actions$.pipe(
        ofType(productAction.LOAD_PRODUCT_Detail),
        switchMap((action:productAction.LoadProductDetail) => {
            return this.http.get<any>(AppConfig.API_END_POINT + "product/"+ action.id).pipe(
                map(product => new productAction.LoadProductDetailSuccess(product)
                ),
                catchError(err => null)
            )
        }
        )
    );
}