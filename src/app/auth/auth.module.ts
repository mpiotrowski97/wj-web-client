import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { AuthComponent } from './auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './containers/register/register.component';
import {CoreModule} from '../core/core.module';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { VerificationComponent } from './containers/verification/verification.component';

@NgModule({
  declarations: [LoginComponent, AuthComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent, VerificationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class AuthModule { }
