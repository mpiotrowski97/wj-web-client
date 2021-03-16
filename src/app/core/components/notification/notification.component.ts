import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { Store } from '@ngrx/store';
import { NotificationType } from '../../types/notification-type.enum';
import { removeNotificationAction } from '../../store/core.actions';

@Component({
  selector: 'wj-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input()
  public notification: Notification;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    setTimeout(() => this.closeNotification(), 5000);
  }

  handleCloseClick(): void {
    this.closeNotification();
  }

  closeNotification(): void {
    this.store.dispatch(removeNotificationAction({notification: this.notification}));
  }
}
