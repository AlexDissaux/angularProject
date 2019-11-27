import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnusComponent } from './alumnus/alumnus.component';
import {FormsModule} from '@angular/forms';
import { AlumnusDetailComponent } from './alumnus-detail/alumnus-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';

const Routes = [
  {path: '', component: AlumnusComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AlumnusComponent,
    AlumnusDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
