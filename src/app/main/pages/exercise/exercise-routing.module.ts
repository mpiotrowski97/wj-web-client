import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExercisesListComponent
  },
  {
    path: 'add',
    component: ExerciseAddComponent
  },
  {
    path: 'edit/:id',
    component: ExerciseEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule {
}
