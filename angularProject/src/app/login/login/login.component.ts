import {Component, OnInit} from '@angular/core';
import {DataUserService} from '../../service/dataUser.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService, private connectionService: ConnectionService) {
  }

  msg = '';

  ngOnInit() {
  }

  login(login: string, password: string) {
    this.authenticationService.auth(login, password);

    if (!this.connectionService.isConnected) {
      this.msg = 'Connection failed';
    }
  }

}
