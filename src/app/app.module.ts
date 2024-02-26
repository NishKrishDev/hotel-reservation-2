//For http requests : --> app.module --> reservation.service.ts --> reservation-list.component.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// first --> import http clitn module
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HomeModule,
    ReservationModule,
    FormsModule,
    ReactiveFormsModule,
    // Second --> Add to imports section
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
