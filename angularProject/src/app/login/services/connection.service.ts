import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  isConnected = false;
  token: string;

  constructor() {
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

}
