import { Component } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { addSuccessNotificationAction } from '../../../../core/store/core.actions';
import { Router } from '@angular/router';
import { ExerciseDto } from '../../../../core/models/api-specification';

@Component({
  selector: 'wj-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.scss']
})
export class ExerciseAddComponent {

  public isFormProcessing = false;

  constructor(
    private exerciseService: ExerciseService,
    private store: Store,
    private router: Router
  ) {
  }

  handleExerciseFormSubmit(exercise: ExerciseDto): void{
    this.isFormProcessing = true;

    this.exerciseService.create(exercise)
      .pipe(
        finalize(() => this.isFormProcessing = false)
      )
      .subscribe(() => {
        this.store.dispatch(addSuccessNotificationAction({content: 'Exercise has been added'}));
        this.router.navigate(['/', 'exercises']);
      });
  }
}
