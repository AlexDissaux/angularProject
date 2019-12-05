import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnusComponent } from './alumnus/almunus/alumnus.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import {RouterModule} from '@angular/router';
import {AuthGuardGuard} from './service/auth-guard.guard';
import { StatsComponent } from './stats/stats.component';
import { RGPDComponent } from './rgpd/rgpd.component';
import {AdminModule} from './admin/admin.module';
import {AlumnusAddComponent} from './admin/alumnus-add/alumnus-add.component';

const Routes = [
  {path: '', component: AlumnusComponent, canActivate : [AuthGuardGuard]},
  {path: 'modify/:id', component: AdminModule., canActivate : [AuthGuardGuard]},
  {path: 'stats', component: StatsComponent, canActivate : [AuthGuardGuard]},
  {path: 'RGPD', component: RGPDComponent},
  {path: 'login', component: LoginComponent}
];
go to this link for multiple routing
https://stackoverflow.com/questions/38879529/how-to-route-to-a-module-as-a-child-of-a-module-angular-2-rc-5
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(AlumnusAddComponent)
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
