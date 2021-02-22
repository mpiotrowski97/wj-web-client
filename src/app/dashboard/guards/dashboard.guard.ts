import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ROLE_ADMINISTRATOR} from '../../core/models/roles';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {hasRoleSelector} from '../../auth/store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(hasRoleSelector, {role: ROLE_ADMINISTRATOR});
  }
}
