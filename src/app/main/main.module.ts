import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
