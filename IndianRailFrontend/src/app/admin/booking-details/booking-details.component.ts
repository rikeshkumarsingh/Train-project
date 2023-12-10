import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {
  passengers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllPassengers();
  }

  getAllPassengers() {
    this.http.get<any[]>('http://localhost:8080/passengers/all')
      .subscribe(
        response => {
          this.passengers = response;
        },
        error => {
          console.error('Failed to fetch passengers:', error);
        }
      );
  }
}


