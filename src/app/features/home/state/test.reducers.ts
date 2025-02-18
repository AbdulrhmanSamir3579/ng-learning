import {createReducer, on} from '@ngrx/store';
import {loadTours, loadToursFail, loadToursSuccess} from './test.actions';
import {Tour} from './tour';


export interface TourState {
  tours: Tour[];       // قائمة الرحلات
  loading: boolean;    // حالة التحميل
  error: string | null; // رسالة الخطأ إن وجدت
}

// الحالة الابتدائية (Initial State)
export const initialState: TourState = {
  tours: [],
  loading: false,
  error: null,
};


export const testReducers = createReducer(
  initialState,
  on(loadTours, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadToursSuccess, (state, {tours}) => ({
    ...state,
    loading: false,
    tours,
    error: null
  })),
  on(loadToursFail, (state, {error}) => ({
    ...state,
    loading: false,
    error
  }))
)
