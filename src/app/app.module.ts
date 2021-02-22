import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {BaseHrefInterceptor} from './core/interceptors/base-href.interceptor';
import {ApplicationErrorsInterceptor} from './core/interceptors/application-errors.interceptor';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {appEffects, appState} from './app.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HttpClientXsrfModule,
    StoreModule.forRoot(appState),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BaseHrefInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ApplicationErrorsInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
