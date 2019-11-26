import { Injectable } from '@angular/core';
import {MockUser} from '../model/mock-user';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User[] { return MockUser; }

  checkConnect(login: string, password: string): boolean {
    return true;
  }

}
