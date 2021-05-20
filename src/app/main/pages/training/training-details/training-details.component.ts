import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../../services/training.service';
import { Observable } from 'rxjs';
import { TrainingDetailsDto } from '../../../../core/models/api-specification';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wj-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  public training$: Observable<TrainingDetailsDto>;

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.training$ = this.trainingService.trainingDetails(this.route.snapshot.paramMap.get('id'));
  }

}
