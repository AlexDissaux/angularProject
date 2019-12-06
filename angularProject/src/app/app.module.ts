import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnusComponent } from './alumnus/almunus/alumnus.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import {RouterModule} from '@angular/router';
import {AuthGuardGuard} from './service/auth-guard.guard';
import { StatsComponent } from './stats/stats.component';
import { LoginModule } from './login/login.module';
import {HttpClientModule} from '@angular/common/http';

const Routes = [
 // {path: '', component: AlumnusComponent, canActivate : [AuthGuardGuard]},
  //{path: 'modify/:id', component: AdminModule, canActivate : [AuthGuardGuard]},
  //{path: 'login', children: [...loginRoutes]}
  {path: '', redirectTo : '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    LoginModule,
    HttpClientModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
