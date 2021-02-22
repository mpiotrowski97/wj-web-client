import {User} from '../../core/models/user';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {setLoggedUserAction} from './auth.actions';

export interface AuthState {
  loggedUser: User;
}

const initialState: AuthState = {
  loggedUser: null
};

export const authReducer = (state: AuthState | undefined, action: Action) => {
  return createReducer(
    initialState,
    on(setLoggedUserAction, (currentState: AuthState, {loggedUser}) => ({...currentState, loggedUser})),
  )(state, action);
};

const authStateSelector = (state: { auth: AuthState }) => state.auth;

export const isAuthenticatedSelector = createSelector(
  authStateSelector,
  (state: AuthState) => {
    return !!state.loggedUser;
  }
);

export const rolesSelector = createSelector(
  authStateSelector,
  (state: AuthState) => state.loggedUser?.roles
);

export const loggedUserSelector = createSelector(
  authStateSelector,
  (state: AuthState) => state.loggedUser
);

export const hasRoleSelector = createSelector(
  authStateSelector,
  (state: AuthState, props: {role: string}) => !!state.loggedUser?.roles && state.loggedUser.roles.includes(props.role)
);
