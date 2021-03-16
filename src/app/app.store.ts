import {coreReducer, CoreState} from './core/store/core.reducer';
import {AuthEffects} from './auth/store/auth.effects';

export interface AppState {
  core: CoreState;
}

export const appState = {
  core: coreReducer,
};

export const appEffects = [AuthEffects];
