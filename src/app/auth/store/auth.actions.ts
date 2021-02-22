import {createAction, props} from '@ngrx/store';
import {User} from '../../core/models/user';

export enum AuthActionsTypes {
  LOGIN_USER = '[AUTH] Login user',
  SET_LOGGED_USER = '[AUTH] Set logged user action'
}

export const setLoggedUserAction = createAction(
  AuthActionsTypes.SET_LOGGED_USER,
  props<{ loggedUser: User }>()
);

export const loginUserAction = createAction(
  AuthActionsTypes.LOGIN_USER,
  props<{username: string, password: string}>()
);
