import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnusComponent } from './alumnus/alumnus.component';
import {FormsModule} from '@angular/forms';
import { AlumnusDetailComponent } from './alumnus-detail/alumnus-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AlumnusComponent,
    AlumnusDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
