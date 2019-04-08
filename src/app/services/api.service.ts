import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url): Observable<any> {
    return this.http.get(url);
  }

  post(url, data): Observable<any> {
    return this.http.post(url, data);
  }

  delete(url, data): Observable<any> {
    return this.http.delete(url, data);
  }
}
