import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {setLoggedUserAction} from '../../auth/store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private store: Store) {
  }

  logout(): void {
    this.http.post('logout', {})
      .subscribe(() => {
        this.store.dispatch(setLoggedUserAction({loggedUser: null}));
        this.router.navigate(['/']);
      });
  }
}
