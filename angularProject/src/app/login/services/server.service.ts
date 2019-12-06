import { Injectable } from '@angular/core';
import {DataUserService} from '../../service/dataUser.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private dataUser: DataUserService) { }

  connect(login: string, password: string) {
    return (this.dataUser.getUser(login).password === password);
  }
}
