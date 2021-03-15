import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainComponent } from './main.component';
import { NbActionsModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [HomepageComponent, MainComponent, SidebarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    NbActionsModule
  ]
})
export class MainModule { }
