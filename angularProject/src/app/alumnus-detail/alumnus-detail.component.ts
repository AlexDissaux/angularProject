import {Component, Input, OnInit} from '@angular/core';
import {Alumnus} from '../model/Alumnus';
import {AlumnusService} from '../service/alumnus.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-alumnus-detail',
  templateUrl: './alumnus-detail.component.html',
  styleUrls: ['./alumnus-detail.component.css']
})
export class AlumnusDetailComponent implements OnInit {

  @Input() alumnus: Alumnus;

  constructor(private alumnusService: AlumnusService, private userService: UserService) {
  }

  ngOnInit() {
  }


  checkAuthorize(alumnus: Alumnus) {
    const isUser = (alumnus.name === localStorage.getItem('login'));
    const isOption = (alumnus.option === localStorage.getItem('login'));
    console.log('est ce que : ' + alumnus.option + ' === ' + localStorage.getItem('login') + ' ?  res : ' + isOption);
    const isAdmin = ('admin' === localStorage.getItem('login'));

    return (isUser || isOption || isAdmin);
  }
}
