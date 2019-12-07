import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthGuardGuard} from './service/auth-guard.guard';
import {LoginModule} from './login/login.module';
import {HttpClientModule} from '@angular/common/http';
import {AlumnusModule} from './alumnus/alumnus.module';
import {HeaderComponent} from './header/header.component';
import {RGPDComponent} from './rgpd/rgpd.component';

const Routes = [
  // {path: '', component: AlumnusComponent, canActivate : [AuthGuardGuard]},
  {path: 'RGPD', component: RGPDComponent},
  //{path: 'modify/:id', component: AdminModule, canActivate : [AuthGuardGuard]},
  {path: 'login', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuardGuard]},
  {path: '', redirectTo: '/alumnus', pathMatch: 'full', canActivate: [AuthGuardGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RGPDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    LoginModule,
    HttpClientModule,
    AlumnusModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
