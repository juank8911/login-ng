import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista3Component } from './vista3.component';

const routes: Routes = [{ path: '', component: Vista3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vista3RoutingModule { }
