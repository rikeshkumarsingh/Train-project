import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Train } from '../train';




@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit, OnDestroy {
  formData: any;
  searchs!: FormGroup;
  trainDetails: any; // Variable to store the searched train details
  errorMessage: string = '';

  BooingConformation:boolean=false;
  BooingConformation1:boolean=false;

  booktick: boolean = false;
  isUpdateDialogOpen: boolean = false;
  updateTrainData: Train = new Train();

  constructor(@Inject(HttpClient) private formDataService: FormDataService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.searchs = this.formBuilder.group({
      trainNumber: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    // this.formDataService.setloginData(this.formData)
  }

  ngOnInit() {
    this.formData = this.formDataService.getloginData(); // Retrieve the form data from the service
  }

  bookticket() {
    if (this.trainDetails) {
      const passengerData = {
        passengerTrainNumber: this.trainDetails.trainNumber,
        passengerStartTime: this.trainDetails.startTime,
        passengerStartDate: this.trainDetails.startDate,
        passengerTrainFromPlace: this.trainDetails.fromPlace,
        passengerTrainName: this.trainDetails.trainName,
        passengerEndTime: this.trainDetails.endTime,
        passengerEndDate: this.trainDetails.endDate,
        passengerTrainToPlace: this.trainDetails.toPlace,
        passengerTicketPrice: this.trainDetails.ticketprice,
        passengerName: (document.getElementById('pname') as HTMLInputElement).value,
        passengerAge: (document.getElementById('page') as HTMLInputElement).value,
        passengerAddress: (document.getElementById('padd') as HTMLInputElement).value,
        passengerGender: (document.getElementById('pgen') as HTMLSelectElement).value,
        passengerStartPlace: (document.getElementById('pplace') as HTMLInputElement).value,
        passengerEndPlace: (document.getElementById('pendplace') as HTMLInputElement).value
      };

      // Send the data to the backend
      this.http.post('http://localhost:8080/passengers/add', passengerData, { responseType: 'text' })
        .subscribe(
          response => {
            console.log('Passenger data sent successfully:', response);
            this.resetForm();
            this.booktick=false;
            this.BooingConformation=true;
            // Perform any additional actions after successfully sending the data
          },
          error => {
            console.error('Failed to send passenger data:', error);
            this.BooingConformation1=true
            // Perform any additional error handling or display error messages
          }
        );
    }
  }

  resetForm() {
    // Reset the form values
    (document.getElementById('pname') as HTMLInputElement).value = '';
    (document.getElementById('page') as HTMLInputElement).value = '';
    (document.getElementById('padd') as HTMLInputElement).value = '';
    (document.getElementById('pgen') as HTMLSelectElement).value = '';
    (document.getElementById('pplace') as HTMLInputElement).value = '';
    (document.getElementById('pendplace') as HTMLInputElement).value = '';
  }

  booking() {
    this.booktick = true;
  }



  closeDialog() {
    // Close the update dialog and reset the updateTrainData
   this.booktick=false;
  }

  onSubmit() {
    if (this.searchs.invalid) {
      this.searchs.reset();
      return;
    }

    const trainNumber = this.searchs.value.trainNumber;
    this.http.get('http://localhost:8080/trains/' + trainNumber)
      .subscribe(
        response => {
          this.trainDetails = response; // Assign the response to the trainDetails variable
          console.log('Found:', this.trainDetails);
          this.searchs.reset();
          this.errorMessage = ''; // Reset the error message
        },
        error => {
          console.error('Not found:', error);
          console.log(this.errorMessage);
          if (error.status === 404) {
            this.errorMessage = 'Train not found'; // Set the error message for 404 error
          } else {
            this.errorMessage = 'Something went wrong'; // Set a generic error message for other errors
          }
        }
      );
  }
}
