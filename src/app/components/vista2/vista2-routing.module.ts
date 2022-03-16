import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista2Component } from './vista2.component';

const routes: Routes = [{ path: '', component: Vista2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vista2RoutingModule { }
