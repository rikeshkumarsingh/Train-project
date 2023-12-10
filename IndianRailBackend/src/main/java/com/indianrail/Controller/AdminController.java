package com.indianrail.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.indianrail.Model.Admin;
import com.indianrail.Model.User;
import com.indianrail.Service.AdminService;
import com.indianrail.Service.UserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	 private final AdminService adminService;
	    
	    public AdminController(AdminService adminService) {
	        this.adminService = adminService;
	    }
	    
	    @PostMapping("/register")
	    public ResponseEntity<Admin> registerUser(@RequestBody Admin  admin) {
	        Admin savedAdmin = adminService.saveUser(admin);
	        return ResponseEntity.ok(savedAdmin);
	    }
	    
	    @PostMapping("/login")
	    public ResponseEntity<Admin> loginUser(@RequestBody Admin admin) {
	        String email = admin.getEmail();
	        String password = admin.getPassword();
	        
	        Admin foundadmin = adminService.findByEmail(email, password);
	        
	        if (foundadmin == null || !foundadmin.getPassword().equals(password)) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	        }
	        
	        return ResponseEntity.ok(foundadmin);
	    }

}
