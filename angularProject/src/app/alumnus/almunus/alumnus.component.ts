import { Component, OnInit } from '@angular/core';
import {Alumnus} from '../../model/Alumnus';
import {AlumnusService} from '../../service/alumnus.service';
import {DataUserService} from '../../service/dataUser.service';
import {ConnectionService} from '../../service/connection.service';

@Component({
  selector: 'app-alumnus',
  templateUrl: './alumnus.component.html',
  styleUrls: ['./alumnus.component.css']
})
export class AlumnusComponent implements OnInit {

  alumnus;
  selectedAlumnus: Alumnus;

  constructor(private alumnusService: AlumnusService, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getAlumnus();
  }

  onSelect(al: Alumnus): void {
    this.selectedAlumnus = al;
  }

  getAlumnus(): void {
    this.alumnus = this.alumnusService.getAlumnus();
  }


  isAuthorized() {
    return (this.connectionService.getToken() === 'admin');
  }
}
