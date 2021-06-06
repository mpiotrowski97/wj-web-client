import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingPlanDetailsDto } from '../../../../core/models/api-specification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingPlanService } from '../../../services/training-plan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wj-training-select-day',
  templateUrl: './training-select-day.component.html',
  styleUrls: ['./training-select-day.component.scss']
})
export class TrainingSelectDayComponent implements OnInit {

  public trainingPlan$: Observable<TrainingPlanDetailsDto>;

  public selectDayForm: FormGroup;

  constructor(
    private trainingPlanService: TrainingPlanService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.trainingPlan$ = this.trainingPlanService.getOne(+this.route.snapshot.paramMap.get('planId'));

    this.selectDayForm = this.formBuilder.group({
      day: this.formBuilder.control('', [Validators.required])
    });
  }

  handleFormSubmit(): void {
    this.router.navigate([
      '/', 'trainings', 'create', this.route.snapshot.paramMap.get('planId'), this.selectDayForm.get('day').value
    ]);
  }
}
