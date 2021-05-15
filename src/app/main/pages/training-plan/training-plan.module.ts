import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingPlanRoutingModule } from './training-plan-routing.module';
import { TrainingPlanAddComponent } from './training-plan-add/training-plan-add.component';
import { TrainingPlanListComponent } from './training-plan-list/training-plan-list.component';
import { MainModule } from '../../main.module';


@NgModule({
  declarations: [TrainingPlanAddComponent, TrainingPlanListComponent],
  imports: [
    CommonModule,
    TrainingPlanRoutingModule,
    MainModule
  ]
})
export class TrainingPlanModule { }
