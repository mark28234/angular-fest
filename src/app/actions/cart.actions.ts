//section 1
import { Action } from '@ngrx/store';
import { Cart } from '../models/cart.model';
// Section 2
export const LOAD_CART       = '[CART] Load'
export const REMOVE_CART   = '[CART] Remove'
export const LOAD_CART_SUCCESS    = '[CART] Load Success'
export const POST_CART       = '[CART] post'
export const REMOVE_CART_SUCCESS   = '[CART] Remove Success'
export const POST_CART_SUCCESS    = '[CART]  POST Success'

// Section 3
export class LoadCart implements Action {
    readonly type = LOAD_CART

    constructor(public id) {}
}
export class LoadCartSuccess implements Action {
    readonly type = LOAD_CART_SUCCESS

    constructor(public payload: Cart[]) {}
}
export class PostCart implements Action {
    readonly type = POST_CART

    constructor(public payload) {}
}
export class PostcartSuccess implements Action {
    readonly type = POST_CART_SUCCESS

    constructor() {}
}


export class RemoveCart implements Action {
    readonly type = REMOVE_CART

    constructor(public payload: number) {}
}

// Section 4
export type Actions = LoadCart| RemoveCart | LoadCartSuccess | PostCart | PostcartSuccess;