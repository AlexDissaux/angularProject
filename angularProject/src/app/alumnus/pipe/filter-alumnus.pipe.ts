import { Pipe, PipeTransform } from '@angular/core';
import {Alumnus} from '../../model/Alumnus';

@Pipe({
  name: 'filterAlumnus'
})
export class FilterAlumnusPipe implements PipeTransform {

  transform(alumnusArray: Alumnus[], searchValue: string): Alumnus[] {

    if (searchValue) {
      alumnusArray = alumnusArray.filter(e => e.name.includes(searchValue) || e.entreprise.includes(searchValue)); }

    return alumnusArray;
  }

}
