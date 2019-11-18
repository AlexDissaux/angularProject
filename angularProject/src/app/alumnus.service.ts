import { Injectable } from '@angular/core';
import {Alumnus} from './alumnus';
import {MockAlumnus} from './mock-alumnus';

@Injectable({
  providedIn: 'root'
})
export class AlumnusService {

  constructor() { }

  getAlumnus(): Alumnus[] {
    return MockAlumnus; }

}
