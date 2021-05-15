import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExerciseDto } from '../../../../core/models/api-specification';
import { finalize, take } from 'rxjs/operators';
import { addSuccessNotificationAction } from '../../../../core/store/core.actions';
import { ExerciseService } from '../../../services/exercise.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'wj-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent implements OnInit {

  @Input()
  public exercise: ExerciseDto;

  @Output()
  private exerciseDelete = new EventEmitter<void>();

  constructor(private exerciseService: ExerciseService, private store: Store) {
  }

  ngOnInit(): void {
  }

  handleDeleteClick(): void {
    if (!confirm(`Do you want to delete exercise "${this.exercise.name}"?`)) {
      return;
    }

    this.exerciseService.delete(this.exercise)
      .pipe(
        take(1),
        finalize(() => this.exerciseDelete.emit())
      )
      .subscribe(() => this.store.dispatch(addSuccessNotificationAction({content: `Exercise "${this.exercise.name}" has been deleted`})));

  }
}
