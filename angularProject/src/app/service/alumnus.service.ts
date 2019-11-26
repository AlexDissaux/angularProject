import {Injectable} from '@angular/core';
import {Alumnus} from '../model/Alumnus';
import {MockAlumnus} from '../model/mock-alumnus';

@Injectable({
  providedIn: 'root'
})

export class AlumnusService {

  constructor() {
  }


  getAlumnus(): Alumnus[] {
    return MockAlumnus;
  }

  changeName(id: number, newName: string): Alumnus {

     const index: number = this.getAlumnus().findIndex(e => e.id === id);
     this.getAlumnus()[index].name = newName;

     return this.getAlumnus()[index];
  }

  add(name: string): Alumnus {
    // Create new Alumnus
    const highestId: number = this.getAlumnus()[this.getAlumnus().length - 1].id;
    const newAlumnus: Alumnus = {id: highestId + 1, name};

    // Insert in Database
    this.getAlumnus().push(newAlumnus);

    // return the new alumnus created
    return newAlumnus;
  }


  delete(id: number) {
    const index: number = this.getAlumnus().findIndex(e => e.id === id);
    this.getAlumnus().splice(index, 1);
  }

}
