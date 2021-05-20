import { Component, OnInit } from '@angular/core';
import { TrainingPlanService } from '../../../services/training-plan.service';

@Component({
  selector: 'wj-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.scss']
})
export class TrainingPlanListComponent implements OnInit {

  public trainingPlans$;

  constructor(private trainingPlanService: TrainingPlanService) {
  }

  ngOnInit(): void {
    this.trainingPlans$ = this.trainingPlanService.allTrainingPlans();
  }

}
