import { Component } from '@angular/core';
import { AuthServiceService } from '../app/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  role: string = '';
  isAdmin: boolean = false;
  


  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
    // Get the role from the AuthService
   
    this.role = this.authService.getRole();
  }

  rolecontrol(){
      this.isAdmin=true;  
   
  }
//   role: string = '';
//   isAdmin!: boolean;

// constructor(private authService: AuthServiceService) {}

// ngOnInit() {
//   // Get the role from the AuthService
//   this.role = this.authService.getRole();
  
//   // Check the role and set isAdmin accordingly
//   this.rolecontrol();
// }

rolecontrols() {
  if (this.role === 'Role_admin') {
    this.isAdmin = true;
  } else {
    this.isAdmin = false;
  }
}
}
