
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Injectable()
export class SessionKeepAliveService {
  private keepAliveSubscription: Subscription = new Subscription;

  constructor(private http: HttpClient) {}

  startKeepAlive() {
    // Adjust the interval as needed (e.g., every 5 minutes)
    const keepAliveInterval = 5 * 60 * 1000; // 5 minutes

    // Send a request to keep the session alive
    const keepAliveRequest = () => this.http.get('http://localhost:8080/users/login').subscribe();

    // Start sending keep-alive requests at the specified interval
    this.keepAliveSubscription = interval(keepAliveInterval).subscribe(keepAliveRequest);
  }

  stopKeepAlive() {
    // Stop sending keep-alive requests
    if (this.keepAliveSubscription) {
      this.keepAliveSubscription.unsubscribe();
    }
  }
}
