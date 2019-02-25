import { Profile } from '../models/profile.model'
import * as profileActions from '../actions/profile.actions'

// Section 1
const initialState: Profile =  null;

// Section 2
export function profileReducer(state: Profile = initialState, action: profileActions.Actions) {

    // Section 3
    switch(action.type) {
        case profileActions.LOAD_PROFILE_SUCCESS:
           state = action.payload;
            return state;
        default:
            return state;
    }
}