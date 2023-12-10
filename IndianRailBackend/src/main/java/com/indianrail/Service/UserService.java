package com.indianrail.Service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.indianrail.Model.User;
import com.indianrail.Reposetry.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User saveUser(User user) {
        // Additional validation, password hashing, etc.
        return userRepository.save(user);
    }
    
    public Optional<User> findUserByEmail(Long id) {
        return userRepository.findById(id);
    }
    
    public User findByEmail(String email, String password) {
        User user = userRepository.findByEmail(email);
        
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        
        return null;
    }
    
    // Other user-related methods
}
