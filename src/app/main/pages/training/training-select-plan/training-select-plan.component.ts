import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingPlanDetailsDto } from '../../../../core/models/api-specification';
import { TrainingPlanService } from '../../../services/training-plan.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'wj-training-select-plan',
  templateUrl: './training-select-plan.component.html',
  styleUrls: ['./training-select-plan.component.scss']
})
export class TrainingSelectPlanComponent implements OnInit {

  public trainingPlans$: Observable<TrainingPlanDetailsDto[]>;

  public selectTrainingForm: FormGroup;

  constructor(
    private trainingPlanService: TrainingPlanService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.trainingPlans$ = this.trainingPlanService.allTrainingPlans();

    this.selectTrainingForm = this.formBuilder.group({
      plan: this.formBuilder.control('', [Validators.required])
    });
  }

  handleFormSubmit(): void {
    this.router.navigate(['/', 'trainings', 'create', this.selectTrainingForm.get('plan').value]);
  }
}
