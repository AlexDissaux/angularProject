import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlumnusModifyComponent} from './alumnus-modify/alumnus-modify.component';
import {AlumnusAddComponent} from './alumnus-add/alumnus-add.component';



@NgModule({
  declarations: [
    AlumnusModifyComponent,
    AlumnusAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
