import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { NbButtonModule, NbCardModule, NbListModule } from '@nebular/theme';


@NgModule({
  declarations: [TrainingListComponent, TrainingDetailsComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbListModule
  ]
})
export class TrainingModule { }
