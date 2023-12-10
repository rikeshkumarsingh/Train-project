package com.indianrail.Reposetry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.indianrail.Model.Admin;
@Repository
public interface AdminReposetry extends JpaRepository<Admin,Long>{
	Admin findByEmail(String email);
}
