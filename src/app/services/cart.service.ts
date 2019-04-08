import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private apiService: ApiService) {}

  getCart(userId): Observable<Cart[]> {
    let url = `${AppConfig.API_END_POINT}cart/${userId}`;
    return this.apiService.get(url);
  }

  addItemToCart(userId, productId, quantity) {
    let url = `${AppConfig.API_END_POINT}cart/`;
    const data = {
      userId: userId,
      productId: productId,
      quantity: quantity || 1
    };
    return this.apiService.post(url, data);
  }
}
