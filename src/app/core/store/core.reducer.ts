import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { Notification } from '../models/notification';
import {
  addFailureNotificationAction,
  addNotificationAction,
  addSuccessNotificationAction,
  removeNotificationAction, setApplicationContentLoadingStatus, setApplicationErrorAction, setApplicationReadyAction
} from './core.actions';
import { NotificationType } from '../types/notification-type.enum';

export interface CoreState {
  notifications: Notification[];
  isApplicationError: boolean;
  isApplicationReady: boolean;
  isContentLoading: boolean;
}

const initialState: CoreState = {
  notifications: [],
  isApplicationError: false,
  isApplicationReady: false,
  isContentLoading: false,
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
      notifications: currentState.notifications.filter(storedNotification => storedNotification !== notification)
    })),
    on(setApplicationErrorAction, (currentState) => ({
      ...currentState,
      isApplicationError: true
    })),
    on(setApplicationReadyAction, (currentState) => ({
      ...currentState,
      isApplicationReady: true
    })),
    on(setApplicationContentLoadingStatus, (currentState, {isLoading}) => ({
      ...currentState,
      isContentLoading: isLoading
    }))
  )(state, action);
}

export const notificationsSelector = createSelector(
  (state: { core: CoreState }) => state.core,
  (state: CoreState) => state.notifications
);

export const applicationErrorSelector = createSelector(
  (state: { core: CoreState }) => state.core,
  (state: CoreState) => state.isApplicationError
);

export const applicationReadySelector = createSelector(
  (state: { core: CoreState }) => state.core,
  (state: CoreState) => state.isApplicationReady
);

export const applicationContentLoadingSelector = createSelector(
  (state: { core: CoreState }) => state.core,
  (state: CoreState) => state.isContentLoading
);
