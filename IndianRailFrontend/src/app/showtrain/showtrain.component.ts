import { Component, OnInit } from '@angular/core';

import {TrainserviceService} from '../trainservice.service'
import { Train } from '../train';

@Component({
  selector: 'app-showtrain',
  templateUrl: './showtrain.component.html',
  styleUrls: ['./showtrain.component.css']
})
export class ShowtrainComponent implements OnInit {
  trainList: Train[] = [];
 
  isUpdateDialogOpen: boolean = false;
  updateTrainData: Train = new Train();

  constructor(private TrainserviceService: TrainserviceService) { }

  ngOnInit() {
    this.getTrainList();
  }

  getTrainList() {
    this.TrainserviceService.getAllTrains().subscribe(
      (data: Train[]) => {
        this.trainList = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  
  openUpdateDialog(train: Train) {
    // Open the update dialog and populate the form fields with train data
    this.updateTrainData = { ...train };
    this.isUpdateDialogOpen = true;
  }

  closeUpdateDialog() {
    // Close the update dialog and reset the updateTrainData
    this.isUpdateDialogOpen = false;
    this.updateTrainData = new Train();
  }

  updateTrain() {
    // Perform the update logic based on your requirements
    // Call the service method to update the train data
    this.TrainserviceService.updateTrain(this.updateTrainData).subscribe(
      (updatedTrain: Train) => {
        // Handle the success response, e.g., display a success message
        console.log('Train updated:', updatedTrain);

        // Close the update dialog and refresh the train list
        this.closeUpdateDialog();
        this.getTrainList();
      },
      (error) => {
        // Handle the error response, e.g., display an error message
        console.error('Error:', error);
      }
    );
  }
  deleteTrain(train: Train) {
    // Perform the delete logic based on your requirements
    // Call the service method to delete the train
    this.TrainserviceService.deleteTrain(train.trainNumber).subscribe(
      () => {
        // Handle the success response, e.g., display a success message
        console.log('Train deleted:', train);

        // Refresh the train list after deletion
        this.getTrainList();
      },
      (error) => {
        // Handle the error response, e.g., display an error message
        console.error('Error:', error);
      }
    );
  }

}
