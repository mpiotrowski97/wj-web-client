import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {AuthComponent} from './auth.component';
import {RegisterComponent} from './containers/register/register.component';
import {ForgotPasswordComponent} from './containers/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './containers/reset-password/reset-password.component';
import {VerificationComponent} from './containers/verification/verification.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      }
    ]
  },
  {
    path: 'user-verification',
    component: VerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
