import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {MainGuard} from './guards/main.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canActivate: [MainGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
