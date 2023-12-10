package com.indianrail.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.indianrail.Model.Train;
import com.indianrail.Service.TrainService;

@RestController
@RequestMapping("/trains")
@CrossOrigin(origins = "http://localhost:4200")
public class TrainController {
    private final TrainService trainService;
    
    public TrainController(TrainService trainService) {
        this.trainService = trainService;
    }
    
    @PostMapping("/add")
    public ResponseEntity<Train> addTrain(@RequestBody Train train) {
        Train savedTrain = trainService.saveTrain(train);
        return ResponseEntity.ok(savedTrain);
    }
//    @PostMapping("/find")
//    public List<Train> findByFromPlaceAndToPlace(@RequestParam("from_place") String fromPlace, @RequestParam("to_Place") String toPlace) {
//        return trainService.findByFromPlaceAndToPlace(fromPlace, toPlace);
//    }
    
    @GetMapping("/{trainNumber}")
    public ResponseEntity<Train> getTrainByTrainNumber(@PathVariable int trainNumber) {
        Train train = trainService.findTrainByTrainNumber(trainNumber);
        if (train != null) {
            return ResponseEntity.ok(train);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Train>> getAllTrains() {
        List<Train> trains = trainService.getAllTrains();
        if (!trains.isEmpty()) {
            return ResponseEntity.ok(trains);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
    @PutMapping("/{trainNumber}")
    public ResponseEntity<Train> updateTrain(@PathVariable int trainNumber, @RequestBody Train train) {
        Train updatedTrain = trainService.updateTrain(trainNumber, train);
        if (updatedTrain != null) {
            return ResponseEntity.ok(updatedTrain);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{trainNumber}")
    public ResponseEntity<Void> deleteTrain(@PathVariable int trainNumber) {
        boolean deleted = trainService.deleteTrain(trainNumber);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    
   
}