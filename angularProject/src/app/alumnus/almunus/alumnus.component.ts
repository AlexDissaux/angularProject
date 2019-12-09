import { Component, OnInit } from '@angular/core';
import {Alumnus} from '../../model/Alumnus';
import {AlumnusService} from '../service/alumnus.service';
import {DataUserService} from '../../service/dataUser.service';
import {ConnectionService} from '../../login/services/connection.service';
import {Router} from '@angular/router';
import {ActionPerformedService} from '../service/actionPerformed.service';

@Component({
  selector: 'app-alumnus',
  templateUrl: './alumnus.component.html',
  styleUrls: ['./alumnus.component.css']
})
export class AlumnusComponent implements OnInit {

  alumnus;
  selectedAlumnus: Alumnus;

  constructor(
    private alumnusService: AlumnusService,
    private connectionService: ConnectionService,
    private router: Router,
    private actionPerformed: ActionPerformedService
  ) { }

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

  addAlmunus() {
    this.actionPerformed.enabledAddMode();
    this.router.navigate(['/admin/edit']);
  }
}
