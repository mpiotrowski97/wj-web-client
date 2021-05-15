import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequiredMarkComponent } from './components/forms/required-mark/required-mark.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ApplicationErrorComponent } from './components/application-error/application-error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ApplicationLoaderComponent } from './components/application-loader/application-loader.component';
import { AuthenticatedDirective } from './directives/authenticated.directive';
import { HasRoleDirective } from './directives/has-role.directive';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { UpperNavbarComponent } from './components/upper-navbar/upper-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule } from '@nebular/theme';
import { RequiredLabelComponent } from './components/required-label/required-label.component';


@NgModule({
  declarations: [
    RequiredMarkComponent,
    NotificationsComponent,
    NotificationComponent,
    ApplicationErrorComponent,
    LoaderComponent,
    ApplicationLoaderComponent,
    AuthenticatedDirective,
    HasRoleDirective,
    PaginationComponent,
    SubnavComponent,
    UpperNavbarComponent,
    RequiredLabelComponent,
  ],
  exports: [
    RequiredMarkComponent,
    NotificationsComponent,
    ApplicationErrorComponent,
    LoaderComponent,
    ApplicationLoaderComponent,
    PaginationComponent,
    SubnavComponent,
    AuthenticatedDirective,
    HasRoleDirective,
    UpperNavbarComponent,
    RequiredLabelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbButtonModule
  ]
})
export class CoreModule {
}
