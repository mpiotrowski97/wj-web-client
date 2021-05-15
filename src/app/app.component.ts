import { Component, OnInit } from '@angular/core';
import { NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  applicationErrorSelector,
  applicationReadySelector
} from './core/store/core.reducer';
import { setApplicationReadyAction } from './core/store/core.actions';

@Component({
  selector: 'wj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public error$: Observable<boolean>;
  public isReady$: Observable<boolean>;

  constructor(
    private oauthService: OAuthService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.configureAuthorization();

    this.error$ = this.store.select(applicationErrorSelector);
    this.isReady$ = this.store.select(applicationReadySelector);
  }

  private configureAuthorization(): void {
    this.oauthService.configure({
      issuer: environment.oauth.issuer,
      redirectUri: environment.oauth.redirectUri,
      clientId: environment.oauth.clientId,
      scope: 'openid profile email offline_access',
      responseType: 'code',
      disableAtHashCheck: true,
      showDebugInformation: true
    });

    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(() => this.store.dispatch(setApplicationReadyAction()));
  }
}
