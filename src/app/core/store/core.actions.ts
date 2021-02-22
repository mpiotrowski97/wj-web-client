import {createAction, props} from '@ngrx/store';
import {Category} from '../models/category';

export enum CoreActionsTypes {
  SET_CATEGORIES = '[Core] Set categories action'
}

export const setCategoriesAction = createAction(
  CoreActionsTypes.SET_CATEGORIES,
  props<{ categories: Category[] }>()
);
