import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardGuard} from '../service/auth-guard.guard';


const LoginRoutes: Routes = [
  {path: '', component: LoginComponent/*, canActivate : [AuthGuardGuard]*/},
];


@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
