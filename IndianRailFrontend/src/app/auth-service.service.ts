import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private role: string = '';

  constructor() {}

  setRole(role: string) {
    console.log(role);
    this.role = role;
  }

  getRole() {

    console.log(this.role)
    return this.role;
  }
}
