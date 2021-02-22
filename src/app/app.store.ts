import {coreReducer, CoreState} from './core/store/core.reducer';
import {authReducer, AuthState} from './auth/store/auth.reducer';
import {AuthEffects} from './auth/store/auth.effects';

export interface AppState {
  core: CoreState;
  auth: AuthState;
}

export const appState = {
  core: coreReducer,
  auth: authReducer,
};

export const appEffects = [AuthEffects];
