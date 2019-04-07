import { Product } from '../models/product.model';
import * as productActions from '../actions/product.actions';

// Section 1
const initialState: Product[] = [null];

// Section 2
export function productReducer(
  state: Product[] = initialState,
  action: productActions.Actions
) {
  // Section 3
  switch (action.type) {
    case productActions.LOAD_PRODUCT_SUCCESS:
      if (action.searchTerm) {
        action.payload = action.payload.filter(
          (obj) => obj.name.indexOf(action.searchTerm) != -1
        );
      }
      if (action.categories) {
        action.payload = action.payload.filter((obj) =>
          action.categories.includes(obj.categoryId.toString())
        );
      }
      state = action.payload;
      return state;

    case productActions.LOAD_PRODUCT_DETAIL_SUCCESS:
      state = [action.payload];
      return state;

    default:
      return state;
  }
}
