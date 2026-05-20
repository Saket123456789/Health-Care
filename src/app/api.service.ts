import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
baseUrl : any; 
  config: Object | undefined;

  constructor(private httpClient : HttpClient, private configService: ConfigService) {
      this.baseUrl = this.configService.apiBaseUrl;
   }
   

   loadConfig() {
    return this.httpClient.get<any>('/assets/appConfig.json')
      .toPromise()
      .then(data => {
        if (data) {
          this.config = data;
          this.baseUrl = data.apiBaseUrl;
        }
      });
  }

   signup(userData: any) {
    return this.httpClient.post(`${this.baseUrl}/auth/register`, userData);
  }

   onLogin(value: any) {
     return this.httpClient.post(`${this.baseUrl}/auth/authenticate`, value);
  }
}
