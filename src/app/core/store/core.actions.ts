import { createAction, props } from '@ngrx/store';
import { Notification } from '../models/notification';

export enum CoreActionsTypes {
  ADD_NOTIFICATION_ACTION = '[CORE] Add notification action',
  ADD_SUCCESS_NOTIFICATION_ACTION = '[CORE] Add success notification action',
  ADD_FAILURE_NOTIFICATION_ACTION = '[CORE] Add failure notification action',
  REMOVE_NOTIFICATION = '[CORE] Remove notification action'
}

export const addNotificationAction = createAction(
  CoreActionsTypes.ADD_NOTIFICATION_ACTION,
  props<{ notification: Notification }>()
);

export const addSuccessNotificationAction = createAction(
  CoreActionsTypes.ADD_SUCCESS_NOTIFICATION_ACTION,
  props<{ content: string }>()
);

export const addFailureNotificationAction = createAction(
  CoreActionsTypes.ADD_FAILURE_NOTIFICATION_ACTION,
  props<{ content: string }>()
);

export const removeNotificationAction = createAction(
  CoreActionsTypes.REMOVE_NOTIFICATION,
  props<{ notification: Notification }>()
);
