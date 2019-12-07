import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  isConnected = false;
  token: string;

  constructor(private router: Router) {
    this.isConnected = this.getConnection();
  }


  getConnection() {
    if (sessionStorage.getItem('connection')) {
      return JSON.parse(sessionStorage.getItem('connection'));
    }
    return this.isConnected;
  }

  stockConnection(tag: boolean) {
    this.isConnected = tag;
    sessionStorage.setItem('connection', JSON.stringify(tag));
  }

  logout() {
    sessionStorage.removeItem('connection');
    this.isConnected = false;
    this.token = undefined;
    this.router.navigate(['login']);
  }

}
