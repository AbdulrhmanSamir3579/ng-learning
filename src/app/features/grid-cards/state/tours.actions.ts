import {createAction, props} from '@ngrx/store';


export const loadTours = createAction('[Tours Page] Load Tours', props<{ page: number, limit: number }>());
export const loadToursSuccess = createAction(
  '[Tours] Load Tours Success',
  props<{ tours: any[], page: number, limit: number, total: number }>()
);
export const loadToursFailure = createAction(
  '[Tours] Load Tours Failure',
  props<{ error: string }>()
);

export const refactorToursAfterPagination = createAction('[Tours] Refactor After Pagination', props<{
  oldLimit: number,
  newLimit: number
}>());

export const addTour = createAction(
  '[Tour] Add Tour',
  props<{ tour: any }>()
);

export const addTourSuccess = createAction(
  '[Tour] Add Tour Success',
  props<{ tour: any }>()
);

export const addTourFailure = createAction(
  '[Tour] Add Tour Failure',
  props<{ error: string }>()
);

export const editTour = createAction(
  '[Tour] Edit Tour',
  props<{ tourId: string; updatedTour: any }>()
);

export const editTourSuccess = createAction(
  '[Tour] Edit Tour Success',
  props<{ tour: any }>()
);

export const editTourFailure = createAction(
  '[Tour] Edit Tour Failure',
  props<{ error: string }>()
);

export const deleteTour = createAction(
  '[Tour] Delete Tour',
  props<{ tourId: any }>()
);

export const deleteTourSuccess = createAction(
  '[Tour] Delete Tour Success',
  props<{ tourId: string }>()
);

export const deleteTourFailure = createAction(
  '[Tour] Delete Tour Failure',
  props<{ error: string }>()
);
