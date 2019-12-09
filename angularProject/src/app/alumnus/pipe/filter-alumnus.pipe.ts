import { Pipe, PipeTransform } from '@angular/core';
import {Alumnus} from '../../model/Alumnus';

@Pipe({
  name: 'filterAlumnus'
})
export class FilterAlumnusPipe implements PipeTransform {

  transform(alumnusArray: Alumnus[], searchValue: string): Alumnus[] {

    if (searchValue) {
      searchValue = searchValue.toLowerCase();
      alumnusArray = alumnusArray.filter(e => e.name.toLowerCase().includes(searchValue)
        || e.entreprise.toLowerCase().includes(searchValue)); }

    return alumnusArray;
  }

}
