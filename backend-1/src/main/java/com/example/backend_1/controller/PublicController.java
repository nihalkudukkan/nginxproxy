package com.example.backend_1.controller;

import com.example.backend_1.model.Alien;
import com.example.backend_1.model.Response;
import com.example.backend_1.repository.AlienRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class PublicController {
    private AlienRepository alienRepository;

    @GetMapping("/")
    public Response start() {
        return new Response("backend-1");
    }

    @PostMapping("/alien")
    public Alien addAlien(@RequestBody Alien alien) {
        return alienRepository.save(alien);
    }

    @GetMapping("/aliens")
    public List<Alien> getAllAliens() {
        return alienRepository.findAll();
    }
}
