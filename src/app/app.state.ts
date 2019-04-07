import { CategoryList } from './models/category.model';
import { Product } from './models/product.model';
import { Profile } from './models/profile.model';
import { Cart } from './models/cart.model';

export interface AppState {
  readonly categoryList: CategoryList;
  readonly product: Product;
  readonly profile: Profile;
  readonly cart: Cart;
}