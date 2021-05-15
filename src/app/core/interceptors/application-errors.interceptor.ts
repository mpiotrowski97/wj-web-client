import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setApplicationErrorAction } from '../store/core.actions';

@Injectable()
export class ApplicationErrorsInterceptor implements HttpInterceptor {

  constructor(private store: Store) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (422 !== error.status) {
            this.store.dispatch(setApplicationErrorAction());
          }

          return throwError(error);
        })
      );
  }
}
