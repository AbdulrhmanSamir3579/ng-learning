import { ActionReducerMap } from '@ngrx/store';
import {tourReducer, TourState} from '../features/grid-cards/state/tours.reducers';


export interface AppState {
  tours: TourState;
}

export const appReducers: ActionReducerMap<AppState> = {
  tours: tourReducer
};
