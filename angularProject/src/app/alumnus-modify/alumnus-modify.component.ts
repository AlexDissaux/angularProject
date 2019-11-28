import {Component, OnInit} from '@angular/core';
import {Alumnus} from '../model/Alumnus';
import {ActivatedRoute} from '@angular/router';
import {AlumnusService} from '../service/alumnus.service';

@Component({
  selector: 'app-alumnus-modify',
  templateUrl: './alumnus-modify.component.html',
  styleUrls: ['./alumnus-modify.component.css']
})
export class AlumnusModifyComponent implements OnInit {


  map: string[];
  alumnus: Alumnus;

  constructor(private route: ActivatedRoute, private alumnusService: AlumnusService) {
    const id: string = this.route.snapshot.paramMap.get('id');

    this.alumnus = this.alumnusService.getAlumnus()[this.alumnusService.getAlumnusIndex(parseInt(id, 10))];

    this.map = Object.keys(this.alumnus);
  }

  ngOnInit() {
  }

  onClickSubmit(formData: Alumnus) {

    this.alumnusService.modify(formData);
  }

}
