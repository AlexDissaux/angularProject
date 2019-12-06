import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ConnectionService} from '../services/connection.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  msg = '';

  constructor(
    private authenticationService: AuthenticationService,
    private connectionService: ConnectionService,
    private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group(
      {
        login: '',
        password: ''
      } );
  }


  ngOnInit() {
  }

  login(data) {
    console.log('we pass here');

    this.authenticationService.auth(data.login, data.password);

    if (!this.connectionService.isConnected) {
      this.msg = 'Connection failed';
    }
    this.msg = 'this.connectionService.isConnected : ' + this.connectionService.isConnected;

  }

}
