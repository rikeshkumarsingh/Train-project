package com.indianrail.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.indianrail.Model.PassangerDetail;
import com.indianrail.Reposetry.PassangerDetailReposetry;
import com.indianrail.Service.PassangerDetailService;

@RestController
@RequestMapping("/passengers")
@CrossOrigin(origins = "http://localhost:4200")
public class PassangerDetailController {

    private final PassangerDetailReposetry passangerDetailRepository;

  
    public PassangerDetailController(PassangerDetailReposetry passangerDetailRepository) {
        this.passangerDetailRepository = passangerDetailRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<String> createPassenger(@RequestBody PassangerDetail passenger) {
        try {
            PassangerDetail savedPassenger = passangerDetailRepository.save(passenger);
            return ResponseEntity.status(HttpStatus.CREATED).body("Passenger created successfully with ID: " + savedPassenger.getId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create passenger.");
        }
    }
    @GetMapping("/all")
    public ResponseEntity<List<PassangerDetail>> getAllPassengers() {
        try {
            List<PassangerDetail> passengers = passangerDetailRepository.findAll();
            return ResponseEntity.ok(passengers);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
