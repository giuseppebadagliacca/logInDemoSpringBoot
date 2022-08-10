package com.example.demo.login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogInRepo extends JpaRepository<LogIn, Integer> {
}
