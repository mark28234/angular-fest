import { CategoryList } from './models/category.model';
import { Product } from './models/product.model';

export interface AppState {
  readonly categoryList: CategoryList;
  readonly product: Product;
}