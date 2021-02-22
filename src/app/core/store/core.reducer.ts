import {Category} from '../models/category';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {setCategoriesAction} from './core.actions';

export interface CoreState {
  categories: Category[];
}

const initialState: CoreState = {
  categories: []
};

export function coreReducer(state: CoreState | undefined, action: Action): CoreState {
  return createReducer(
    initialState,
    on(setCategoriesAction, (currentState, {categories}) => ({...currentState, categories}))
  )(state, action);
}

export const categoriesSelector = createSelector(
  (state: {core: CoreState}) => state.core,
  (state: CoreState) => state.categories
);
