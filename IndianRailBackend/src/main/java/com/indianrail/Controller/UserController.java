package com.indianrail.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.indianrail.Model.User;
import com.indianrail.Service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        try {
            // Your registration logic here
            
            user.setRole("Role_user");
            User savedUser = userService.saveUser(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User user, HttpSession session) {
        try {
            // Your login logic here
            
            String email = user.getEmail();
            String password = user.getPassword();
            
            User foundUser = userService.findByEmail(email, password);
            
            if (foundUser == null || !foundUser.getPassword().equals(password)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
            
            // Extend the session expiration time
            session.setMaxInactiveInterval(30 * 60); // Extend the session by 30 minutes
            
            return ResponseEntity.ok(foundUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
