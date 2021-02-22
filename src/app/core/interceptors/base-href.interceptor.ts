import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class BaseHrefInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestClone = request.clone({
      url: `${environment.apiUrl}/${request.url}`,
      withCredentials: true,
      setHeaders: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    });

    return next.handle(requestClone);
  }
}
