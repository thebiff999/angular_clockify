import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private config = require('../assets/server.config.json');
  private baseUrl = this.config.baseUrl + ':' + this.config.port + this.config.path + '/';

  constructor(private http: HttpClient) { }

  public async get(url:string){
    let options = {observe: 'body', responseType: 'json'};
    return this.http.get(this.baseUrl + url, ).toPromise();
  }

  public async post(url:string, body: any) {
    this.http.post(this.baseUrl + url, body);
  }

  public async patch(url:string, body: any) {
    this.http.patch(this.baseUrl + url, body);
  }

  public async delete(url:string) {
    this.http.delete(this.baseUrl + url);
  }

}
