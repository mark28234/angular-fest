import {Profile} from './profile.model';
export interface Cart {
    id:string;
    user:Profile;
    product:Product;
    quantity:string;
}
export interface Product  {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    discount: number;
    inStock: number;
    rating: number;
}