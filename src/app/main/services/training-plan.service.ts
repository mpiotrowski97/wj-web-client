import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingPlanDetailsDto } from '../../core/models/api-specification';

@Injectable({
  providedIn: 'root'
})
export class TrainingPlanService {

  constructor(private http: HttpClient) {
  }

  getOne(trainingPlanId: number): Observable<TrainingPlanDetailsDto> {
    return new Observable<TrainingPlanDetailsDto>(observer => {
      observer.next(
        {
          id: '1',
          name: 'Wednesday training plan',
          description: 'Very hard training plan',
          days: [
            {
              id: '1',
              name: 'Test day',
              exercises: [
                {
                  id: '1',
                  name: 'biceps',
                  description: 'very very very',
                  videoUrl: 'http://youtube.pl',
                  type: 'biceps',
                  category: 'biceps'
                }
              ]
            },
            {
              id: '2',
              name: 'Test day',
              exercises: [
                {
                  id: '1',
                  name: 'biceps',
                  description: 'very very very',
                  videoUrl: 'http://youtube.pl',
                  type: 'biceps',
                  category: 'biceps'
                }
              ]
            }
          ]
        }
      );
    });
  }

  allTrainingPlans(): Observable<TrainingPlanDetailsDto[]> {
    return new Observable((observer) => {
      observer.next([
        {
          id: '1',
          name: 'Wednesday training plan',
          description: 'Very hard training plan',
          days: [
            {
              id: '1',
              name: 'Test day',
              exercises: [
                {
                  id: '1',
                  name: 'biceps',
                  description: 'very very very',
                  videoUrl: 'http://youtube.pl',
                  type: 'biceps',
                  category: 'biceps'
                }
              ]
            },
            {
              id: '2',
              name: 'Test day',
              exercises: [
                {
                  id: '1',
                  name: 'biceps',
                  description: 'very very very',
                  videoUrl: 'http://youtube.pl',
                  type: 'biceps',
                  category: 'biceps'
                }
              ]
            }
          ]
        }
      ]);
    });
  }
}
