import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vista2RoutingModule } from './vista2-routing.module';
import { Vista2Component } from './vista2.component';


@NgModule({
  declarations: [
    Vista2Component
  ],
  imports: [
    CommonModule,
    Vista2RoutingModule
  ]
})
export class Vista2Module { }
