import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { NbButtonModule, NbCardModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { TrainingAddComponent } from './training-add/training-add.component';
import { TrainingSelectPlanComponent } from './training-select-plan/training-select-plan.component';
import { CoreModule } from '../../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingSelectDayComponent } from './training-select-day/training-select-day.component';


@NgModule({
  declarations: [TrainingListComponent, TrainingDetailsComponent, TrainingAddComponent, TrainingSelectPlanComponent, TrainingSelectDayComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    CoreModule,
    NbSelectModule,
    ReactiveFormsModule
  ]
})
export class TrainingModule { }
