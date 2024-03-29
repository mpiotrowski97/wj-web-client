import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginModelResponse} from '../../core/models/api-specification';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<LoginModelResponse> {
    return this.http.get<LoginModelResponse>('auth/login', {
      headers: {
        authorization: `Basic ${btoa(`${username}:${password}`)}`
      }
    });
  }

}
