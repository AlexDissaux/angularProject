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

  getAlumnusIndex(id: number): number {
    return this.getAlumnus().findIndex(e => e.id === id);
  }

  changeName(id: number, newName: string): Alumnus {

    this.getAlumnus()[this.getAlumnusIndex(id)].name = newName;

    return this.getAlumnus()[this.getAlumnusIndex(id)];
  }

  generateId(): number {
    return this.getAlumnus().reduce(((acc, val) => (val.id > acc) ? val.id : acc), 0) + 1; }

  add(newAlumnus: Alumnus) { // Insert in Database
    this.getAlumnus().push(newAlumnus);
  }


  delete(id: number) {
    const index: number = this.getAlumnus().findIndex(e => e.id === id);
    this.getAlumnus().splice(index, 1);
  }

  modify(alumnus: Alumnus) {
    this.delete(alumnus.id);
    this.add(alumnus);
  }


  /*  add(name: string, promotion: string, option: string, pays: string, entreprise: string, salaire: string): Alumnus {
      // Create new Alumnus
      const highestId: number = this.getAlumnus()[this.getAlumnus().length - 1].id;
      const newAlumnus: Alumnus = {id: highestId + 1, name, promotion, option, pays, entreprise, salaire};

      // Insert in Database
      this.getAlumnus().push(newAlumnus);

      // return the new alumnus created
      return newAlumnus;
    }*/


}
