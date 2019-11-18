import {Component, Input, OnInit} from '@angular/core';
import {Alumnus} from '../alumnus';

@Component({
  selector: 'app-alumnus-detail',
  templateUrl: './alumnus-detail.component.html',
  styleUrls: ['./alumnus-detail.component.css']
})
export class AlumnusDetailComponent implements OnInit {

  @Input() alumnus: Alumnus;

  constructor() { }

  ngOnInit() {
  }

}
