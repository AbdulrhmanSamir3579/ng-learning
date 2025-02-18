import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadTours, editTour, addTour, deleteTour} from './state/tours.actions'; // Action to load tours
import {selectTours} from './state/tours.selectors';
import {SharedModule} from '../../shared/modules/shared.module';
import {Observable} from 'rxjs'; // Selectors for pagination and tours

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  imports: [SharedModule],
})
export class GridCardsComponent implements OnInit {
  currentPage = 1;
  toursPerPage = 4;
  tours$: Observable<any[]>;
  // //@ts-ignore
  // pagination$ = this.store.select(selectPagination); // Select pagination state

  constructor(private store: Store) {
    this.tours$ = this.store.select(selectTours);
  }

  ngOnInit(): void {
    this.loadTours();
  }

  // Dispatch loadTours action to fetch tours for the current page
  loadTours(): void {
    this.store.dispatch(loadTours({page: this.currentPage, limit: this.toursPerPage}));
  }

  dispatch() {
    this.store.dispatch(loadTours({page: this.currentPage, limit: this.toursPerPage}));
  }

  // Update the current page and dispatch loadTours to update the page data
  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadTours(); // Load tours for the new page
  }

  addTour(): void {
    const newTour = {name: 'New Tour', description: 'Tour description', image: 'path/to/image.jpg'};
    this.store.dispatch(addTour({tour: newTour}));
  }

  // Dispatch the editTour action to update a specific tour
  editTour(tour: any): void {
    const updatedTour = {...tour, name: 'Updated Tour Name'};
    this.store.dispatch(editTour({tourId: tour.id, updatedTour}));
  }

  // Dispatch the deleteTour action to remove a specific tour
  deleteTour(tourId: number): void {
    this.store.dispatch(deleteTour({tourId}));
  }
}
