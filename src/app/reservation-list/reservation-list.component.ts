import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../model/reservation';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = []

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    //Eighth --> subscribe to the returning observable to get data
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    })
  }

  deleteReservation(id: string) {
    this.reservationService.deleteResevationUd(id).subscribe(() => {
      console.log('Delete request processsed')
    })
  }
}
