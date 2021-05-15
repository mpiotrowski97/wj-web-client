import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingPlanAddComponent } from './training-plan-add/training-plan-add.component';
import { TrainingPlanListComponent } from './training-plan-list/training-plan-list.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingPlanListComponent
  },
  {
    path: 'add',
    component: TrainingPlanAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingPlanRoutingModule { }
