import { Component, OnInit } from '@angular/core';
import {Alumnus} from '../model/Alumnus';
import {AlumnusService} from '../service/alumnus.service';

@Component({
  selector: 'app-alumnus',
  templateUrl: './alumnus.component.html',
  styleUrls: ['./alumnus.component.css']
})
export class AlumnusComponent implements OnInit {

  alumnus;
  selectedAlumnus: Alumnus;

  constructor(private alumnusService: AlumnusService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(al: Alumnus): void {
    this.selectedAlumnus = al;
  }

  getHeroes(): void {
    this.alumnus = this.alumnusService.getAlumnus();  }


}
