package com.indianrail.Service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.indianrail.Model.Admin;
import com.indianrail.Model.User;
import com.indianrail.Reposetry.AdminReposetry;

@Service
public class AdminService {
    private final AdminReposetry adminRepository;
    
    public AdminService(AdminReposetry adminRepository) {
        this.adminRepository = adminRepository;
    }
    
    public Admin saveUser(Admin admin) {
        // Additional validation, password hashing, etc.
        return adminRepository.save(admin);
    }
    
    public Optional<Admin> findUserById(Long id) {
        return adminRepository.findById(id);
    }
    
    public Admin findByEmail(String email, String password) {
        Admin admin = adminRepository.findByEmail(email);
        
        if (admin != null && admin.getPassword().equals(password)) {
            return admin;
        }
        
        return null;
    }
}
