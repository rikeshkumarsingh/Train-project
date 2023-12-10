import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  loginData: any
  constructor(private formData: FormDataService) {}

  seeData() {
     this.loginData = this.formData.getloginData();
    console.log('Login Data:', this.loginData);
    // Do something with the retrieved data
  }
}
