import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContextInitResponse} from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  constructor(
    private http: HttpClient
  ) {
  }

  public init(): Observable<ContextInitResponse> {
    return this.http.get<ContextInitResponse>('context/init');
  }
}
