import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private oAuthService: OAuthService, private store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.oAuthService.hasValidAccessToken()) {
      return true;
    }

    this.oAuthService.initLoginFlow();
    return false;
  }
}
