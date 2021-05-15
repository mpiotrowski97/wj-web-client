import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';
import { ExerciseDto } from '../../../../core/models/api-specification';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, switchMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setApplicationContentLoadingStatus } from '../../../../core/store/core.actions';

@Component({
  selector: 'wj-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent implements OnInit {

  public exercises$: Observable<ExerciseDto[]>;
  private readonly refreshToken$ = new BehaviorSubject(null);

  constructor(private exerciseService: ExerciseService, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(setApplicationContentLoadingStatus({isLoading: true}));

    this.exercises$ = this.refreshToken$.pipe(switchMap(() => (
      this.exerciseService
        .allExercises()
        .pipe(
          finalize(() => this.store.dispatch(setApplicationContentLoadingStatus({isLoading: false})))
        )
    )));
  }

  handleExerciseDelete(): void {
    this.store.dispatch(setApplicationContentLoadingStatus({isLoading: true}));
    this.refreshToken$.next(null);
  }
}
