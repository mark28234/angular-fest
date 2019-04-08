import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AppConfig } from '../app-config';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private apiService: ApiService) {}

  getCategories(): Observable<Category[]> {
    let url = `${AppConfig.API_END_POINT}category`;
    return this.apiService.get(url);
  }
}
