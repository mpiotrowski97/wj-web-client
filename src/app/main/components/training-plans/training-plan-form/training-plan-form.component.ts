import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseDto, TrainingPlanDayDto, TrainingPlanDto } from '../../../../core/models/api-specification';
import { ExerciseService } from '../../../services/exercise.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  addFailureNotificationAction,
  addSuccessNotificationAction,
  setApplicationContentLoadingStatus
} from '../../../../core/store/core.actions';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'wj-training-plan-form',
  templateUrl: './training-plan-form.component.html',
  styleUrls: ['./training-plan-form.component.scss']
})
export class TrainingPlanFormComponent implements OnInit {

  public trainingPlanForm: FormGroup;

  public exercises$: Observable<ExerciseDto[]>;

  @Input()
  public trainingPlan: TrainingPlanDto = {
    id: '',
    name: '',
    description: '',
    days: [{id: '', trainingPlanId: '', exercisesIds: []}]
  };

  @Input()
  public isFormProcessing: boolean;

  @Input()
  public formHeader: string;

  @Output()
  private trainingPlanFormSubmit: EventEmitter<TrainingPlanDto> = new EventEmitter<TrainingPlanDto>();


  constructor(private formBuilder: FormBuilder, private exercisesService: ExerciseService, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(setApplicationContentLoadingStatus({isLoading: true}));

    this.exercises$ = this.exercisesService.allExercises()
      .pipe(
        finalize(() => this.store.dispatch(setApplicationContentLoadingStatus({isLoading: false})))
      );

    this.trainingPlanForm = this.formBuilder.group({
      name: this.formBuilder.control(this.trainingPlan.name, [Validators.required]),
      description: this.formBuilder.control(this.trainingPlan.description),
      days: this.formBuilder.array([
        this.formBuilder.group(
          {
            id: '',
            trainingPlanId: '',
            exercisesIds: []
          }
        )
      ], [Validators.required])
    });
  }

  handleFormSubmit(): void {
    const areThereDayWithoutExercises = (this.trainingPlanForm.get('days').value as TrainingPlanDayDto[])
      .map(day => null !== day.exercisesIds && !!day.exercisesIds.length)
      .includes(false);

    if (areThereDayWithoutExercises) {
      this.store.dispatch(addFailureNotificationAction({content: 'Select exercises in your days'}));
      return;
    }

    this.trainingPlanFormSubmit.emit({
      id: this.trainingPlan.id,
      name: this.trainingPlanForm.get('name').value,
      description: this.trainingPlanForm.get('description').value,
      days: this.trainingPlanForm.get('days').value
    });
  }

  handleAddDayClick(): void {
    const days = this.trainingPlanForm.get('days') as FormArray;
    days.push(this.formBuilder.group(
      {
        id: '',
        trainingPlanId: '',
        exercisesIds: []
      }
    ));
  }

  handleRemoveDayClick(index: number): void {
    const days = this.trainingPlanForm.get('days') as FormArray;
    days.removeAt(index);
  }
}
