import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vista3RoutingModule } from './vista3-routing.module';
import { Vista3Component } from './vista3.component';


@NgModule({
  declarations: [
    Vista3Component
  ],
  imports: [
    CommonModule,
    Vista3RoutingModule
  ]
})
export class Vista3Module { }
