import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { Notification } from '../models/notification';
import {
  addFailureNotificationAction,
  addNotificationAction,
  addSuccessNotificationAction,
  removeNotificationAction
} from './core.actions';
import { NotificationType } from '../types/notification-type.enum';

export interface CoreState {
  notifications: Notification[];
}

const initialState: CoreState = {
  notifications: []
};

export function coreReducer(state: CoreState | undefined, action: Action): CoreState {
  return createReducer(
    initialState,
    on(addNotificationAction, (currentState, {notification}) => ({
      ...currentState,
      notifications: [...currentState.notifications, notification]
    })),
    on(addSuccessNotificationAction, (currentState, {content}) => ({
      ...currentState,
      notifications: [...currentState.notifications, {type: NotificationType.SUCCESS, content}]
    })),
    on(addFailureNotificationAction, (currentState, {content}) => ({
      ...currentState,
      notifications: [...currentState.notifications, {type: NotificationType.FAILURE, content}]
    })),
    on(removeNotificationAction, (currentState, {notification}) => ({
      ...currentState,
      notifications: currentState.notifications.filter(storedNotification => storedNotification != notification)
    }))
  )(state, action);
}

export const notificationsSelector = createSelector(
  (state: { core: CoreState }) => state.core,
  (state: CoreState) => state.notifications
);
