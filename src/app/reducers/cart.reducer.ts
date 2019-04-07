import { Cart } from '../models/cart.model'
import * as cartActions from '../actions/cart.actions'

// Section 1
const initialState: Cart =  null;

// Section 2
export function cartReducer(state: Cart[] = [initialState], action: cartActions.Actions) {

    // Section 3
    switch(action.type) {
        case cartActions.LOAD_CART_SUCCESS:
           state = action.payload;
            return state;
        default:
            return state;
    }
}