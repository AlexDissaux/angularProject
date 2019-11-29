import {Injectable} from '@angular/core';
import {MockUser} from '../model/mock-user';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUser(): User[] {
    return MockUser;
  }

  checkAdminLogged() {
    return (localStorage.getItem('login') === 'admin');
  }

  isconnect() {
    const login = localStorage.getItem('login');
    return  ((login !== undefined) && (login !== null));
  }

  checkConnect(login: string, password: string): boolean {

    const user: User = this.getUser().find(e => e.login === login);
    const loginAccepted: boolean = ((user !== undefined) && (user.password === password));

    if (loginAccepted) {
      localStorage.setItem('login', user.login);
    }
    return loginAccepted;
  }

}
