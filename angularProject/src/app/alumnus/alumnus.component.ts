import { Component, OnInit } from '@angular/core';
import {Alumnus} from '../alumnus';
import {AlumnusService} from '../alumnus.service';

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
