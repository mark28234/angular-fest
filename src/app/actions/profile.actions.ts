//section 1
import { Action } from '@ngrx/store';
import { Profile } from '../models/profile.model';
// Section 2
export const LOAD_PROFILE = '[PROFILE] Load';
export const REMOVE_PROFILE = '[PROFILE] Remove';
export const LOAD_PROFILE_SUCCESS = '[PROFILE]  Success';

// Section 3
export class LoadProfile implements Action {
  readonly type = LOAD_PROFILE;
  constructor(public id: number) {}
}
export class LoadProfileSuccess implements Action {
  readonly type = LOAD_PROFILE_SUCCESS;

  constructor(public payload: Profile) {}
}

export class RemoveProfile implements Action {
  readonly type = REMOVE_PROFILE;

  constructor(public payload: number) {}
}

// Section 4
export type Actions = LoadProfile | RemoveProfile | LoadProfileSuccess;
