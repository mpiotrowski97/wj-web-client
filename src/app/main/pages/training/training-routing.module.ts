import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingListComponent
  },
  {
    path: ':id',
    component: TrainingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
