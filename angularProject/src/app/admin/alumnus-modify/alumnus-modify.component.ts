import {Component, OnInit} from '@angular/core';
import {Alumnus} from '../../model/Alumnus';
import {ActivatedRoute, Router} from '@angular/router';
import {AlumnusService} from '../../service/alumnus.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-alumnus-modify',
  templateUrl: './alumnus-modify.component.html',
  styleUrls: ['./alumnus-modify.component.css']
})
export class AlumnusModifyComponent implements OnInit {


  map: string[];
  alumnus: Alumnus;

  checkoutForm; // Stock form value form Stock builder

  constructor(
    private route: ActivatedRoute,
    private alumnusService: AlumnusService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {

    const id: string = this.route.snapshot.paramMap.get('id');
    this.alumnus = this.alumnusService.getAlumnus()[this.alumnusService.getAlumnusIndex(parseInt(id, 10))];

    this.map = Object.keys(this.alumnus);

    this.checkoutForm = this.formBuilder.group({
      id: this.alumnus.id,
      name: this.alumnus.name,
      promotion: this.alumnus.promotion,
      option: this.alumnus.option,
      pays: this.alumnus.pays,
      entreprise: this.alumnus.entreprise,
      salaire: this.alumnus.salaire
    });
  }

  ngOnInit() {
  }

  onClickSubmit(formData) {

    this.alumnusService.modify(formData);
    this.router.navigate(['']);
  }

}
