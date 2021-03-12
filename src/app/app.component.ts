import {Component} from '@angular/core';
import {NullValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Component({
  selector: 'wj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public error$: Observable<boolean>;

  constructor(
    private oauthService: OAuthService
  ) {
    // this.configureAuthorization();
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
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
