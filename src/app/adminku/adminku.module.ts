import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminkuRoutingModule } from './adminku-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminkuRoutingModule
  ]
})
export class AdminkuModule { }
