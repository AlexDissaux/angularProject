import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectionService} from './connection.service';
import {ServerService} from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private connection: ConnectionService, private serverService: ServerService) {
    this.connection.isConnected = this.connection.getConnection();
  }

  auth(login: string, password: string) {

    this.connection.isConnected = this.serverService.connect(login, password);

    return this.connection.isConnected;
    //this.connection.token = 'pipeautoken';
  }



}
