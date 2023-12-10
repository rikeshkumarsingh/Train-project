import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      userID: ['', Validators.required],
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
      this.registerForm.reset();
    }
  }

  sendFormDataToBackend(formData: any) {
    // Make an HTTP POST request to your backend API with the form data
    this.http.post<any>('http://localhost:8080/admin/register', formData)
      .subscribe(
        response => {
          console.log('Success:', response);
          // Handle the response from the backend
        },
        error => {
          console.error('Error:', error);
          // Handle any errors that occur
        }
      );
  }

}
