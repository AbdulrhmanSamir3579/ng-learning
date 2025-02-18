import { createReducer, on } from '@ngrx/store';
import { loadToursFailure, loadToursSuccess } from './tours.actions';

// تعريف الحالة الأولية
export interface TourState {
  tours: any[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  error: string | null;
}

const initialState: TourState = {
  tours: [],
  currentPage: 1,
  totalPages: 0,
  totalItems: 0,
  pageSize: 4,
  error: null,
};

export const tourReducer = createReducer(
  initialState,
  on(loadToursSuccess, (state, { tours, page, limit, total }) => ({
    ...state,
    tours,
    currentPage: page,   // تحديث الصفحة الحالية
    pageSize: limit,      // تحديث عدد العناصر لكل صفحة
    totalItems: total,    // تحديث العدد الكلي للعناصر
    totalPages: Math.ceil(total / limit), // حساب عدد الصفحات
    error: null          // إعادة تعيين الخطأ عند النجاح
  })),
  on(loadToursFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
