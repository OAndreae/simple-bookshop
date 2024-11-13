package com.backend.demo.controller;

import com.backend.demo.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public List<User> getAllUsers() {
        // Using List.of instead of Arrays.asList for immutable list
        return List.of(
            new User(1L, "John Doe", "john@example.com"),
            new User(2L, "Jane Smith", "jane@example.com"),
            new User(3L, "Bob Johnson", "bob@example.com")
        );
    }
} 