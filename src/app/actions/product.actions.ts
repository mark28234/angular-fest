//section 1
import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';
// Section 2
export const LOAD_PRODUCT = '[PRODUCT] Load';
export const REMOVE_PRODUCT = '[PRODUCT] Remove';
export const LOAD_PRODUCT_SUCCESS = '[PRODUCT]  Success';
export const LOAD_PRODUCT_Detail = '[PRODUCT] detail';
export const LOAD_PRODUCT_DETAIL_SUCCESS = '[PRODUCT]  detail Success';

// Section 3
export class LoadProduct implements Action {
  readonly type = LOAD_PRODUCT;

  constructor(public searchTerm?: string, public categories?: string[]) {}
}
export class LoadProductSuccess implements Action {
  readonly type = LOAD_PRODUCT_SUCCESS;

  constructor(
    public payload: Product[],
    public searchTerm?: string,
    public categories?: string[]
  ) {}
}

export class LoadProductDetail implements Action {
  readonly type = LOAD_PRODUCT_Detail;

  constructor(public id: string) {}
}
export class LoadProductDetailSuccess implements Action {
  readonly type = LOAD_PRODUCT_DETAIL_SUCCESS;
  constructor(public payload: Product) {}
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;

  constructor(public payload: number) {}
}

// Section 4
export type Actions =
  | LoadProduct
  | RemoveProduct
  | LoadProductSuccess
  | LoadProductDetail
  | LoadProductDetailSuccess;
