import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingDetailsDto, TrainingListItemDto } from '../../core/models/api-specification';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor() {
  }

  trainingDetails(id: string): Observable<TrainingDetailsDto> {
    return new Observable<TrainingDetailsDto>(observer => observer.next({
      id: '1',
      date: '2020-01-01',
      trainingPlanName: 'Trening siłowy',
      trainingPlanDayName: 'Wtorek (nogi)',
      exercises: [
        {
          id: '1',
          name: 'Wyciskanie',
          series: [
            {
              id: '1',
              repetition: 5,
              score: 80
            },
            {
              id: '2',
              repetition: 5,
              score: 81
            }
          ]
        },
        {
          id: '2',
          name: 'Podnoszenie',
          series: [
            {
              id: '3',
              repetition: 3,
              score: 100
            },
            {
              id: '4',
              repetition: 1,
              score: 120
            }
          ]
        }
      ]
    }));
  }

  allTrainings(): Observable<TrainingListItemDto[]> {
    return new Observable<TrainingListItemDto[]>(observer => observer.next([
      {
        id: '1',
        date: '2020-01-01',
        trainingPlanName: 'Trening siłowy',
        trainingPlanDayName: 'Wtorek (nogi)'
      },
      {
        id: '2',
        date: '2020-01-02',
        trainingPlanName: 'Trening interwałowy',
        trainingPlanDayName: 'Środa (krótkie interwały)'
      }
    ]));
  }
}
