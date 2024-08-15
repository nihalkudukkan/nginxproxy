package com.example.backend_1.repository;

import com.example.backend_1.model.Alien;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlienRepository extends JpaRepository<Alien, Integer> {
}
