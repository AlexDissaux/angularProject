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

  constructor(private alumnusService: AlumnusService, private userService: UserService) { }

  ngOnInit() {
  }



}
