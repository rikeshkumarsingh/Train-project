import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  showMessage!: string;
  errorMessage!: string;
  passMessage!: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      address: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      aadharNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.sendFormDataToBackend(formData);
     
    }
  }

  sendFormDataToBackend(formData: any) {
    // Make an HTTP POST request to your backend API with the form data

    if (this.registerForm.controls['password'].value === this.registerForm.controls['confirmPassword'].value) {
      this.http.post<any>('http://localhost:8080/users/register', formData)
      .subscribe(
        response => {
          console.log('Success:', response);
          // Handle the response from the backend
          this.errorMessage = '';
          this.passMessage = '';
          this.showMessage = 'Registration successful';
          this.registerForm.reset();
        },
        error => {
          console.error('Error:', error);
          // Handle any errors that occur
          if (error.status === 500) {
            // User already exists
            this.showMessage = '';
            this.passMessage = '';
            this.errorMessage = 'User already exists';
          }
        }
      );
    } else {
      this.passMessage = 'Conform Password is not matching';
      this.showMessage = '';
      this.errorMessage = '';
      
    }
  }
}
