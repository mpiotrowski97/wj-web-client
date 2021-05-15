import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbSpinnerModule
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { MainModule } from '../../main.module';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';


@NgModule({
  declarations: [ExercisesListComponent, ExerciseAddComponent, ExerciseEditComponent],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    ReactiveFormsModule,
    CoreModule,
    NbSpinnerModule,
    NbCardModule,
    NbIconModule,
    MainModule
  ]
})
export class ExerciseModule { }
