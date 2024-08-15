package com.example.backend_2.repository;

import com.example.backend_2.model.Alien;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlienRepository extends JpaRepository<Alien, Integer> {
}
