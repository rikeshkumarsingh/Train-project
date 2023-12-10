package com.indianrail.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.indianrail.Model.Train;
import com.indianrail.Reposetry.TrainRepository;

import jakarta.transaction.Transactional;

@Service
public class TrainService {
    private final TrainRepository trainRepository;
    
    public TrainService(TrainRepository trainRepository) {
        this.trainRepository = trainRepository;
    }
    
    public Train saveTrain(Train train) {
        // Additional validation, error handling, etc.
        return trainRepository.save(train);
    }
    
    public Optional<Train> findTrainById(Long trainId) {
        return trainRepository.findById(trainId);
    }
   

//	public List<Train> findByFromPlaceAndToPlace(String fromPlace, String toPlace) {
//		
//		 List<Train> trains = trainRepository.findByFromPlaceAndToPlace(fromPlace, toPlace);
//	        return trains;
//	}

    
	public Train findTrainByTrainNumber(int trainNumber) {
        return trainRepository.findByTrainNumber(trainNumber);
    }

	public List<Train> getAllTrains() {
	    return trainRepository.findAll();
	}

	public Train updateTrain(int trainNumber, Train train) {
	    Optional<Train> existingTrainOptional = Optional.ofNullable(trainRepository.findByTrainNumber(trainNumber));
	    if (existingTrainOptional.isPresent()) {
	        Train existingTrain = existingTrainOptional.get();
	        existingTrain.setTrainName(train.getTrainName());
	        existingTrain.setFromPlace(train.getFromPlace());
	        existingTrain.setToPlace(train.getToPlace());
	        existingTrain.setTicketprice(train.getTicketprice());
	        existingTrain.setStartTime(train.getStartTime());
	        existingTrain.setEndTime(train.getEndTime());
	        existingTrain.setStartDate(train.getStartDate());
	        existingTrain.setEndDate(train.getEndDate());
	        return trainRepository.save(existingTrain);
	    } else {
	        return null; // Train with the specified trainNumber not found
	    }
	}

	@Transactional
	public boolean deleteTrain(int trainNumber) {
	    Train train = trainRepository.findByTrainNumber(trainNumber);
	    if (train != null) {
	        trainRepository.deleteByTrainNumber(trainNumber);
	        return true; // Train deleted successfully
	    } else {
	        return false; // Train with the specified trainNumber not found
	    }
	}


}