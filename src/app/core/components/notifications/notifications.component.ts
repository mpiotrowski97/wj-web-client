import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Notification} from '../../models/notification';
import {Store} from '@ngrx/store';
import { notificationsSelector } from '../../store/core.reducer';

@Component({
  selector: 'wj-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{
  public notifications$: Observable<Notification[]>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.notifications$ = this.store.select(notificationsSelector);
  }

}
