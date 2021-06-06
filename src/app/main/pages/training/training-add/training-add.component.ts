import { Component, OnInit } from '@angular/core';
import { TrainingPlanService } from '../../../services/training-plan.service';
import { Observable } from 'rxjs';
import { TrainingPlanDetailsDto } from '../../../../core/models/api-specification';

@Component({
  selector: 'wj-training-add',
  templateUrl: './training-add.component.html',
  styleUrls: ['./training-add.component.scss']
})
export class TrainingAddComponent implements OnInit {

  public trainingPlans$: Observable<TrainingPlanDetailsDto[]>;

  constructor(private trainingPlanService: TrainingPlanService) { }

  ngOnInit(): void {
    this.trainingPlans$ = this.trainingPlanService.allTrainingPlans();
  }

}
