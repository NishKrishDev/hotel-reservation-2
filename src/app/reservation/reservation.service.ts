import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
// Third --> Import http client
import { HttpClient } from '@angular/common/http';
// Fourth --> Import observables
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    //Sixth add dependency injection 
    private http: HttpClient
  ) { }

  //Fifth add base url for mock api
  private apiUrl = 'http://localhost:3001'
  private reservations: Reservation[] = [];

  //Seventh sending get requests
  //return type as observable of type Reservation.
  //An observsble that could return reservation.
  getReservations(): Observable<Reservation[]> {
    //setting the type that we are expexting to get in return (Reservation array) and then submit URL and endpoint
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + '/reservation/' + id)
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + '/reservation', reservation)
  }

  deleteResevationUd(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/reservation/:id')
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl+'/reservation/:id', updatedReservation)
  }
}
