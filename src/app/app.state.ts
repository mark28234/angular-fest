import { CategoryList } from './models/category.model';
import { Product } from './models/product.model';
import { Profile } from './models/profile.model';

export interface AppState {
  readonly categoryList: CategoryList;
  readonly product: Product;
  readonly profile: Profile;
}