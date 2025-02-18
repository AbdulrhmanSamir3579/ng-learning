import {createAction, props} from '@ngrx/store';
import {Tour} from './tour';


export const loadTours = createAction('[Tours Page] Load Tours]');
export const loadToursSuccess = createAction('[Tours Page] Load Tours Success', props<{ tours: Tour[] }>());
export const loadToursFail = createAction('[Tours Page] Load Tours Failure', props<{ error: string }>());
