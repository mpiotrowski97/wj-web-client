import { createAction, props } from '@ngrx/store';
import { Notification } from '../models/notification';

export enum CoreActionsTypes {
  ADD_NOTIFICATION_ACTION = '[CORE] Add notification action',
  ADD_SUCCESS_NOTIFICATION_ACTION = '[CORE] Add success notification action',
  ADD_FAILURE_NOTIFICATION_ACTION = '[CORE] Add failure notification action',
  REMOVE_NOTIFICATION_ACTION = '[CORE] Remove notification action',
  SET_APPLICATION_ERROR_ACTION = '[CORE] Set application error action',
  SET_APPLICATION_READY_ACTION = '[CORE] Set application ready action',
  SET_APPLICATION_CONTENT_LOADING_STATUS = '[CORE] Set application content loading status'
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
  CoreActionsTypes.REMOVE_NOTIFICATION_ACTION,
  props<{ notification: Notification }>()
);

export const setApplicationContentLoadingStatus = createAction(
  CoreActionsTypes.SET_APPLICATION_CONTENT_LOADING_STATUS,
  props<{ isLoading: boolean }>()
);

export const setApplicationErrorAction = createAction(
  CoreActionsTypes.SET_APPLICATION_ERROR_ACTION
);

export const setApplicationReadyAction = createAction(
  CoreActionsTypes.SET_APPLICATION_READY_ACTION
);
