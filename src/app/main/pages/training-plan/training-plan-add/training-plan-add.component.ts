import { Component, OnInit } from '@angular/core';
import { TrainingPlanDto } from '../../../../core/models/api-specification';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'wj-training-plan-add',
  templateUrl: './training-plan-add.component.html',
  styleUrls: ['./training-plan-add.component.scss']
})
export class TrainingPlanAddComponent implements OnInit {

  public isFormProcessing = false;

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleTrainingPlanFormSubmit(trainingPlan: TrainingPlanDto): void{
    this.isFormProcessing = true;

    // this.exerciseService.create(exercise)
    //   .pipe(
    //     finalize(() => this.isFormProcessing = false)
    //   )
    //   .subscribe(() => {
    //     this.store.dispatch(addSuccessNotificationAction({content: 'Exercise has been added'}));
    //     this.router.navigate(['/', 'exercises']);
    //   });
  }


}
