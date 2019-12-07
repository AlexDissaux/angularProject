import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnusRoutingModule } from './alumnus-routing.module';
import {AlumnusComponent} from './almunus/alumnus.component';
import {AlumnusDetailComponent} from './alumnus-detail/alumnus-detail.component';


@NgModule({
  declarations: [
    AlumnusComponent,
    AlumnusDetailComponent
  ],
  imports: [
    CommonModule,
    AlumnusRoutingModule
  ]
})
export class AlumnusModule { }
