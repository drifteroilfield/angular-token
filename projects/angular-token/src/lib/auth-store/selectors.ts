import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AuthData } from '../../models';
import { State } from './state';

export const authState: MemoizedSelector<
  object,
  State
  > = createFeatureSelector<State>('auth');

export const selectBaseUrl = createSelector(
  authState,
  state => state.baseUrl,
);
