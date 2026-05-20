import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

 

  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http.get('/assets/appConfig.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  get apiBaseUrl(): string {
    return this.config?.apiBaseUrl;
  }
}
