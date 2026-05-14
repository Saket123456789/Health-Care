import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private baseUrl = 'http://localhost:8085/api'; // Replace with your actual API base URL

  constructor(private httpClient : HttpClient) { }

   signup(userData: any) {
    return this.httpClient.post(`${this.baseUrl}/auth/register`, userData);
  }

   onLogin(value: any) {
     return this.httpClient.post(`${this.baseUrl}/auth/authenticate`, value);
  }
}
