import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../../services/training.service';
import { Observable } from 'rxjs';
import { TrainingListItemDto } from '../../../../core/models/api-specification';

@Component({
  selector: 'wj-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {

  public trainings$: Observable<TrainingListItemDto[]> = this.trainingService.allTrainings();

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit(): void {
  }

}
