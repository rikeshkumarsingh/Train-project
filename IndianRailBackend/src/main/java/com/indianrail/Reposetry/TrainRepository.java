package com.indianrail.Reposetry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.indianrail.Model.Train;

@Repository
public interface TrainRepository extends JpaRepository<Train, Long> {
//	 List<Train> findByFromPlaceAndToPlace(String fromPlace, String toPlace);
	
	
	 Train findByTrainNumber(int trainNumber);
	 void deleteByTrainNumber(int trainNumber);
}
