import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingAddComponent } from './training-add/training-add.component';
import { TrainingSelectPlanComponent } from './training-select-plan/training-select-plan.component';
import { TrainingSelectDayComponent } from './training-select-day/training-select-day.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingListComponent
  },
  {
    path: 'create',
    component: TrainingSelectPlanComponent
  },
  {
    path: 'create/:planId',
    component: TrainingSelectDayComponent
  },
  {
    path: 'create/:planId/:dayId',
    component: TrainingAddComponent
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
export class TrainingRoutingModule {
}
