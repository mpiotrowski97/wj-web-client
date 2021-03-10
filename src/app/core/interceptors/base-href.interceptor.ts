import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class BaseHrefInterceptor implements HttpInterceptor {

  constructor(private oauthService: OAuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestClone = request.clone({
      withCredentials: true,
      setHeaders: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + this.oauthService.getAccessToken()
      }
    });

    return next.handle(requestClone);
  }
}
