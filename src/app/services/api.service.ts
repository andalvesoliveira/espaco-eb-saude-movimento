import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Métodos genéricos para requisições HTTP
  get(endpoint: string, params?: any) {
    return this.http.get(`${this.apiUrl}/${endpoint}`, { params });
  }

  post(endpoint: string, body: any) {
    return this.http.post(`${this.apiUrl}/${endpoint}`, body);
  }

  put(endpoint: string, body: any) {
    return this.http.put(`${this.apiUrl}/${endpoint}`, body);
  }

  delete(endpoint: string) {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
}