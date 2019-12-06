import { Injectable } from '@angular/core';
import {DataUserService} from '../../service/dataUser.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private dataUser: DataUserService) { }

  connect(login: string, password: string) {
    const user = this.dataUser.getUser(login);
    console.log('test : ' + user);
    return ((user !== undefined) && (user.password === password));
  }
}
