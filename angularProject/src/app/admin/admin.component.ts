import {Component, Input, OnInit} from '@angular/core';
import {Alumnus} from '../model/Alumnus';
import {ActivatedRoute, Router} from '@angular/router';
import {AlumnusService} from '../service/alumnus.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  map: string[];

  constructor(private route: ActivatedRoute, private alumnusService: AlumnusService) {
    const id: number = this.route.snapshot.paramMap.get('id');

    const alumnus: Alumnus = this.alumnusService.getAlumnus()[this.alumnusService.getAlumnusIndex(id)];
    this.map = Object.keys(alumnus);
  }

  ngOnInit() {
  }

}
