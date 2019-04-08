import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AppConfig } from '../app-config';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getProducts(): Observable<Product[]> {
    let url = `${AppConfig.API_END_POINT}product`;
    return this.apiService.get(url);
  }
}
