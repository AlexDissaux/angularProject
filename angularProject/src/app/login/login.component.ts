import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  msg = '';

  ngOnInit() {
  }

  check(login: string, password: string) {
    if (this.userService.checkConnect(login, password)) {
      this.router.navigate(['/']).then(r => console.log(r));
      this.msg = 'login succeeded';
    } else {
      this.msg = 'Invalid username or password';
    }
  }

}
