import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css']
})
export class SearchTrainComponent {
  searchs: FormGroup;
  trainDetails: any; // Variable to store the searched train details
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.searchs = this.formBuilder.group({
      trainNumber: ['', Validators.required],
    });
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
