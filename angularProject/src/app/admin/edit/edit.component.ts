import {Component, OnInit} from '@angular/core';
import {Alumnus} from '../../model/Alumnus';
import {ActivatedRoute, Router} from '@angular/router';
import {AlumnusService} from '../../alumnus/service/alumnus.service';
import {FormBuilder} from '@angular/forms';
import {ActionPerformedService} from '../../alumnus/service/actionPerformed.service';

@Component({
  selector: 'app-alumnus-modify',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  action: string;
  checkoutForm; // Stock form value form Stock builder

  constructor(
    private route: ActivatedRoute,
    private alumnusService: AlumnusService,
    private router: Router,
    private formBuilder: FormBuilder,
    private actionPerformed: ActionPerformedService
  ) {
  }

  ngOnInit() {

    this.action = this.actionPerformed.getAction();

    if (this.action === 'Modify') {
      const alumnusToModify: Alumnus = this.alumnusService.findOne(this.actionPerformed.getAlumnusId());

      this.checkoutForm = this.formBuilder.group({
        id: alumnusToModify.id,
        name: alumnusToModify.name,
        promotion: alumnusToModify.promotion,
        option: alumnusToModify.option,
        pays: alumnusToModify.pays,
        entreprise: alumnusToModify.entreprise,
        salaire: alumnusToModify.salaire
      });
    } else {
      this.checkoutForm = this.formBuilder.group({
        id: this.alumnusService.generateId(),
        name: '',
        promotion: '',
        option: '',
        pays: '',
        entreprise: '',
        salaire: ''
      });
    }

  }


  onclickSubmit(formData) {
    if (this.action === 'Modify') {
      this.alumnusService.modify(formData);
      this.router.navigate(['']);
    } else {
      this.alumnusService.add(formData);
      this.router.navigate(['']);
    }
  }
}

