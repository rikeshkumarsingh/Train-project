import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from './train';


@Injectable({
  providedIn: 'root'
})
export class TrainserviceService {

  private apiUrl = 'http://localhost:8080/trains';

  constructor(private http: HttpClient) { }

  getAllTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.apiUrl}/all`);
  }

  getTrainByTrainNumber(trainNumber: number): Observable<Train> {
    return this.http.get<Train>(`${this.apiUrl}/${trainNumber}`);
  }

  addTrain(train: Train): Observable<Train> {
    return this.http.post<Train>(`${this.apiUrl}/add`, train);
  }

  updateTrain(train: Train): Observable<Train> {
    const url = `${this.apiUrl}/${train.trainNumber}`;
    return this.http.put<Train>(url, train);
  }
  
  deleteTrain(trainNumber: number): Observable<void> {
    const url = `${this.apiUrl}/${trainNumber}`;
    return this.http.delete<void>(url);
  }
  
}
