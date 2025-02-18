import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TourState} from './tours.reducers';

export const selectTourState = createFeatureSelector<TourState>('tour');

export const selectTours = createSelector(selectTourState, (state: TourState) => state.tours
);

export const selectPagination = createSelector(selectTourState, (state: TourState) => ({
  tours: state.tours,
  currentPage: state.currentPage,
  totalPages: state.totalPages,
  totalItems: state.totalItems,
  pageSize: state.pageSize,
}));
