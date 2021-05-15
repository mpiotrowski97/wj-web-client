import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateExerciseRequest, CreateExerciseResponse, ExerciseDto } from '../../core/models/api-specification';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) {
  }

  public create(request: CreateExerciseRequest): Observable<CreateExerciseResponse> {
    return this.http.post<CreateExerciseResponse>(`${environment.apiUrl}/exercises`, request);
  }

  public allExercises(): Observable<ExerciseDto[]> {
    return this.http.get<ExerciseDto[]>(`${environment.apiUrl}/exercises`);
  }

  public delete(exercise: ExerciseDto): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/exercises/${exercise.id}`);
  }

  public findOne(id: string): Observable<ExerciseDto> {
    return this.http.get<ExerciseDto>(`${environment.apiUrl}/exercises/${id}`);
  }

  public update(exercise: ExerciseDto): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/exercises/${exercise.id}`, exercise);
  }
}
