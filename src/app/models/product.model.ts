import { Category } from './category.model';
export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    discount: number;
    inStock: number;
    rating: number;
    categoryId: number;
    category: Category;
}