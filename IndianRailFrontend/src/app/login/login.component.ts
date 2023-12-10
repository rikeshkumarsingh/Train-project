import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { AppComponent} from '../app.component'
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  errorMessage: string = '';
  storeData: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthServiceService,
    private appComponent:AppComponent,
    private formdataservice: FormDataService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  ngOnDestroy(): void {
    this.formdataservice.setloginData(this.storeData);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.reset();
      return;
    }
  
    const formData = this.loginForm.value;
    this.http.post('http://localhost:8080/users/login', formData).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        this.storeData=response;
        this.loginForm.reset();
  
        const role = response.role;
        this.formdataservice.setFormData(response);
  
        // Pass the role to the AuthService
        this.authService.setRole(role);
  
        // Navigate to the appropriate component based on the role
        if (role === 'Role_admin') {
          this.appComponent.rolecontrol();
          this.router.navigate(['/app-adminnav']);
        } else if (role === 'Role_user') {
          this.router.navigate(['/app-userdetail']);
        } else {
          console.error('Unrecognized role:', role);
        }
        
        this.errorMessage = ''; // Reset the error message
      },
      error => {
        console.error('Login failed:', error);
        if (error.status === 401) {
          this.errorMessage = 'Please enter correct username and password'; // Set the error message for 401 error
        } else {
          this.errorMessage = 'Something went wrong'; // Set a generic error message for other errors
        }
      }
    );
  }
}
