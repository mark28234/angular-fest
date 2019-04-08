import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private apiService: ApiService) {}

  getProfile(): Observable<Profile> {
    let url = `${AppConfig.API_END_POINT}user/1`;
    return this.apiService.get(url);
  }
}
