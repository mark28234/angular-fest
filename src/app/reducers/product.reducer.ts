import { Product } from '../models/product.model'
import * as productActions from '../actions/product.actions'

// Section 1
const initialState: Product[] =  [null];

// Section 2
export function productReducer(state: Product[] = initialState, action: productActions.Actions) {

    // Section 3
    switch(action.type) {
        case productActions.LOAD_PRODUCT_SUCCESS:
           state = action.payload;
            return state;
        default:
            return state;
    }
}