import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExerciseDto } from '../../../../core/models/api-specification';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { addSuccessNotificationAction, setApplicationContentLoadingStatus } from '../../../../core/store/core.actions';

@Component({
  selector: 'wj-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss']
})
export class ExerciseEditComponent implements OnInit {

  public exercise$: Observable<ExerciseDto>;
  public isFormProcessing = false;

  constructor(
    private exerciseService: ExerciseService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(setApplicationContentLoadingStatus({isLoading: true}));

    this.exercise$ = this.exerciseService.findOne(this.route.snapshot.paramMap.get('id'))
      .pipe(
        finalize(() => this.store.dispatch(setApplicationContentLoadingStatus({isLoading: false})))
      );
  }

  handleExerciseFormSubmit(exercise: ExerciseDto): void {
    this.isFormProcessing = true;

    this.exerciseService.update(exercise)
      .pipe(
        finalize(() => this.isFormProcessing = false)
      )
      .subscribe(() => {
        this.store.dispatch(addSuccessNotificationAction({content: 'Exercise has been updated'}));
        this.router.navigate(['/', 'exercises']);
      });
  }
}
