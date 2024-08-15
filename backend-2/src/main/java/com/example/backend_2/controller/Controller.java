package com.example.backend_2.controller;

import com.example.backend_2.model.Alien;
import com.example.backend_2.model.Response;
import com.example.backend_2.repository.AlienRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class Controller {
    private AlienRepository alienRepository;

    @GetMapping("/")
    public Response get() {
        return new Response("backend-2");
    }

    @GetMapping("/aliens")
    public List<Alien> getAllAliens() {
        return alienRepository.findAll();
    }
}
