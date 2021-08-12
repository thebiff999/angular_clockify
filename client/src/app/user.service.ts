import { Injectable } from '@angular/core';
import { User } from '../../../api-server/src/models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private basePath = "users";

  constructor(private apiService: ApiService) { }

  public async getUsers() {
    const users:any = await this.apiService.get(this.basePath);
    console.log(users.results);
    return users.results;
  }
}
