package com.indianrail.Reposetry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.indianrail.Model.PassangerDetail;

public interface PassangerDetailReposetry extends JpaRepository<PassangerDetail, Long> {

}
