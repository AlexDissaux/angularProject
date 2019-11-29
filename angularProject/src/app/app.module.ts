import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnusComponent } from './alumnus/alumnus.component';
import {FormsModule} from '@angular/forms';
import { AlumnusDetailComponent } from './alumnus-detail/alumnus-detail.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {AuthGuardGuard} from './service/auth-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AlumnusModifyComponent } from './alumnus-modify/alumnus-modify.component';
import { AlumnusAddComponent } from './alumnus-add/alumnus-add.component';

const Routes = [
  {path: '', component: AlumnusComponent, canActivate : [AuthGuardGuard]},
  {path: 'admin/', component: AdminComponent, canActivate : [AuthGuardGuard]},
  {path: 'add', component: AlumnusAddComponent, canActivate : [AuthGuardGuard]},
  {path: 'modify/:id', component: AlumnusModifyComponent, canActivate : [AuthGuardGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AlumnusComponent,
    AlumnusDetailComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    AlumnusModifyComponent,
    AlumnusAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
