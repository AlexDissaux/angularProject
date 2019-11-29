import { Component, OnInit } from '@angular/core';
import {Alumnus} from '../model/Alumnus';
import {ActivatedRoute} from '@angular/router';
import {AlumnusService} from '../service/alumnus.service';

@Component({
  selector: 'app-alumnus-add',
  templateUrl: './alumnus-add.component.html',
  styleUrls: ['./alumnus-add.component.css']
})
export class AlumnusAddComponent implements OnInit {

  map: string[];
  id: number;
  newAlumnus: Alumnus;


  constructor(private route: ActivatedRoute, private alumnusService: AlumnusService) {
    this.id = this.alumnusService.generateId();

    // get the on a exemple
    this.map = Object.keys(this.alumnusService.getAlumnus()[0]);
  }

  ngOnInit() {
  }

  onClickSubmit(formData) {
  console.log(formData);
    this.alumnusService.add(formData);
  }
}
