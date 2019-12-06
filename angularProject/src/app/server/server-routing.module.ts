import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const serverRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(serverRoutes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
