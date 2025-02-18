import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TourService } from '../tours.service';
import {
  loadTours,
  loadToursSuccess,
  loadToursFailure,
  addTour,
  addTourSuccess,
  addTourFailure,
  editTour,
  editTourSuccess,
  editTourFailure,
  deleteTour,
  deleteTourSuccess,
  deleteTourFailure,
} from './tours.actions';

@Injectable()
export class TourEffects {
  private actions$ = inject(Actions);
  private tourService = inject(TourService);

  // تحميل الجولات مع الصفحات
  loadTours$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTours),
      switchMap(({ page, limit }) =>
        this.tourService.getTours(page, limit).pipe(
          map((response) =>
            loadToursSuccess({
              tours: response.data,
              page,
              limit,
              total: response.total,
            })
          ),
          catchError((error) => of(loadToursFailure({ error: error.message })))
        )
      )
    )
  );

  // إضافة جولة جديدة
  addTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTour),
      switchMap(({ tour }) =>
        this.tourService.addTour(tour).pipe(
          map((newTour) => addTourSuccess({ tour: newTour })),
          catchError((error) => of(addTourFailure({ error: error.message })))
        )
      )
    )
  );

  // تعديل جولة موجودة
  editTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editTour),
      switchMap(({ tourId, updatedTour }) =>
        this.tourService.updateTour(tourId, updatedTour).pipe(
          map((updatedTourResponse) =>
            editTourSuccess({ tour: updatedTourResponse })
          ),
          catchError((error) => of(editTourFailure({ error: error.message })))
        )
      )
    )
  );

  // حذف جولة
  deleteTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTour),
      switchMap(({ tourId }) =>
        this.tourService.deleteTour(tourId).pipe(
          map(() => deleteTourSuccess({ tourId })),
          catchError((error) => of(deleteTourFailure({ error: error.message })))
        )
      )
    )
  );
}
