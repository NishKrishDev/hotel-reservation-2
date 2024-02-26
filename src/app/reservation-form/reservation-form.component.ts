import { Component, OnInit } from '@angular/core';
// first
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//
import { ReservationService } from '../reservation/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  // second
  reservationForm: FormGroup = new FormGroup({})
  //  
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.reservationService.getReservation(id).subscribe(reservation => {
        if (reservation)
          this.reservationForm.patchValue(reservation)
      });

    }
  }

  //Fifth - adding method
  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Valid');
      let reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        //update
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log('Update request processed')
        })
      }
      else {
        //add
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log('Create request processed')
        });
      }
      this.router.navigate(['/list'])
    }
    else {
      console.log('Invalid')
    }
  }
  //

}
