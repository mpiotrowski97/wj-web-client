import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {AuthActionsTypes, loginUserAction, setLoggedUserAction} from './auth.actions';
import {finalize, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  loginEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<ReturnType<typeof loginUserAction>>(AuthActionsTypes.LOGIN_USER),
    switchMap(payload => this.loginService.login(payload.username, payload.password)
      .pipe(
        finalize(() => this.router.navigateByUrl('/')),
        mergeMap((response) => [
            setLoggedUserAction({loggedUser: response.user}),
          ]
        )
      )
    )
  ));

  constructor(private actions$: Actions, private loginService: LoginService, private router: Router) {
  }
}
