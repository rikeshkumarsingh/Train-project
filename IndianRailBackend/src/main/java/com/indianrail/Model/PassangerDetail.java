package com.indianrail.Model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PassangerDetail {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private int passengerTrainNumber;
	private LocalTime passengerStartTime;
	private LocalDate passengerStartDate;
	private String passengerTrainFromPlace;
	private String passengerTrainName;
	private LocalTime passengerEndTime;
	private LocalDate passengerEndDate;
	private String passengerTrainToPlace;
	private double passengerTicketPrice;
	private String passengerName;
	private int passengerAge;
	private String passengerAddress;
	private String passengerGender;
	private String passengerStartPlace;
	private String passengerEndPlace;
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public int getPassengerTrainNumber() {
		return passengerTrainNumber;
	}
	public void setPassengerTrainNumber(int passengerTrainNumber) {
		this.passengerTrainNumber = passengerTrainNumber;
	}
	public LocalTime getPassengerStartTime() {
		return passengerStartTime;
	}
	public void setPassengerStartTime(LocalTime passengerStartTime) {
		this.passengerStartTime = passengerStartTime;
	}
	public LocalDate getPassengerStartDate() {
		return passengerStartDate;
	}
	public void setPassengerStartDate(LocalDate passengerStartDate) {
		this.passengerStartDate = passengerStartDate;
	}
	public String getPassengerTrainFromPlace() {
		return passengerTrainFromPlace;
	}
	public void setPassengerTrainFromPlace(String passengerTrainFromPlace) {
		this.passengerTrainFromPlace = passengerTrainFromPlace;
	}
	public String getPassengerTrainName() {
		return passengerTrainName;
	}
	public void setPassengerTrainName(String passengerTrainName) {
		this.passengerTrainName = passengerTrainName;
	}
	public LocalTime getPassengerEndTime() {
		return passengerEndTime;
	}
	public void setPassengerEndTime(LocalTime passengerEndTime) {
		this.passengerEndTime = passengerEndTime;
	}
	public LocalDate getPassengerEndDate() {
		return passengerEndDate;
	}
	public void setPassengerEndDate(LocalDate passengerEndDate) {
		this.passengerEndDate = passengerEndDate;
	}
	public String getPassengerTrainToPlace() {
		return passengerTrainToPlace;
	}
	public void setPassengerTrainToPlace(String passengerTrainToPlace) {
		this.passengerTrainToPlace = passengerTrainToPlace;
	}
	public double getPassengerTicketPrice() {
		return passengerTicketPrice;
	}
	public void setPassengerTicketPrice(double passengerTicketPrice) {
		this.passengerTicketPrice = passengerTicketPrice;
	}
	public String getPassengerName() {
		return passengerName;
	}
	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}
	public int getPassengerAge() {
		return passengerAge;
	}
	public void setPassengerAge(int passengerAge) {
		this.passengerAge = passengerAge;
	}
	public String getPassengerAddress() {
		return passengerAddress;
	}
	public void setPassengerAddress(String passengerAddress) {
		this.passengerAddress = passengerAddress;
	}
	public String getPassengerGender() {
		return passengerGender;
	}
	public void setPassengerGender(String passengerGender) {
		this.passengerGender = passengerGender;
	}
	public String getPassengerStartPlace() {
		return passengerStartPlace;
	}
	public void setPassengerStartPlace(String passengerStartPlace) {
		this.passengerStartPlace = passengerStartPlace;
	}
	public String getPassengerEndPlace() {
		return passengerEndPlace;
	}
	public void setPassengerEndPlace(String passengerEndPlace) {
		this.passengerEndPlace = passengerEndPlace;
	}
	
	
	


}
