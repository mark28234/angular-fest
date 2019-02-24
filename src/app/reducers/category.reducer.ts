import { Action } from '@ngrx/store'
import { Category } from '../models/category.model'
import * as categoryActions from '../actions/category.actions'

// Section 1
const initialState: Category[] =  [{
    id: 0,
    name: 'category 1',
    parent: 0
}];

// Section 2
export function categoryReducer(state: Category[] = initialState, action: categoryActions.Actions) {

    // Section 3
    switch(action.type) {
        case categoryActions.LOAD_CATEGORY_SUCCESS:
           state = action.payload;
            return state;
        default:
            return state;
    }
}