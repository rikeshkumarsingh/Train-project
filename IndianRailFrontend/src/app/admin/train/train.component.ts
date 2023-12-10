import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  registerForm!: FormGroup;
  succesMessage: any;
  errorMessage:any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      trainNumber: ['', Validators.required],
      trainName: ['', Validators.required],
      fromPlace: ['', Validators.required],
      toPlace: ['', Validators.required],
      ticketprice: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endDate: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
  
    // Send form data to the backend
    const formData = this.registerForm.value;
    this.http.post('http://localhost:8080/trains/add', formData)
      .subscribe(
        response => {
          console.log('Form data sent successfully:', response);
          // Reset the form
          this.succesMessage = 'Train Added Successfully';
          this.errorMessage = '';
          this.registerForm.reset();
        },
        error => {
          console.error('Error sending form data:', error);
          if (error.status === 500) {
            this.errorMessage = 'Train Already Exists';
          } else {
            this.errorMessage = 'Train Not Added';
          }
          this.succesMessage = '';
        }
      );
  }
  

 

}
