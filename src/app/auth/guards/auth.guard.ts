import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {isAuthenticatedSelector} from '../store/auth.reducer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(isAuthenticatedSelector).pipe(
      map(isAuthenticated => !isAuthenticated)
    );
  }
}
