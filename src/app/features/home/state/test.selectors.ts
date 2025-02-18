import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TourState} from '../../grid-cards/state/tours.reducers';

export const selectTourState = createFeatureSelector<TourState>('tour');
export const tourSelectors = {
  selectTours: createSelector(selectTourState, (state: TourState) => state.tours)
}
