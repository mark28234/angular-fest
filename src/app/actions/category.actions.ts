//section 1
import { Action } from '@ngrx/store';
import { Category } from '../models/category.model';
// Section 2
export const LOAD_CATEGORY = '[CATEGORY] Load';
export const REMOVE_CATEGORY = '[CATEGORY] Remove';
export const LOAD_CATEGORY_SUCCESS = '[CATEGORY]  Success';

// Section 3
export class LoadCategory implements Action {
  readonly type = LOAD_CATEGORY;

  constructor() {}
}
export class LoadCategorySuccess implements Action {
  readonly type = LOAD_CATEGORY_SUCCESS;

  constructor(public payload: Category[]) {}
}

export class RemoveCategory implements Action {
  readonly type = REMOVE_CATEGORY;

  constructor(public payload: number) {}
}

// Section 4
export type Actions = LoadCategory | RemoveCategory | LoadCategorySuccess;
