import { Component, Input, OnInit } from '@angular/core';
import { TrainingPlanDetailsDto, TrainingPlanDto } from '../../../../core/models/api-specification';

@Component({
  selector: 'wj-training-plan-card',
  templateUrl: './training-plan-card.component.html',
  styleUrls: ['./training-plan-card.component.scss']
})
export class TrainingPlanCardComponent implements OnInit {

  @Input()
  public trainingPlan: TrainingPlanDetailsDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
