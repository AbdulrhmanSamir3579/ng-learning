import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private apiUrl = 'http://127.0.0.1:8000/natours/api/v1/tours';

  constructor(private http: HttpClient) {}

  getTours(page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  addTour(tour: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tour);
  }

  updateTour(tourId: any, tour: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${tourId}`, tour);
  }

  deleteTour(tourId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${tourId}`);
  }
}
