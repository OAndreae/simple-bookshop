package com.backend.demo.controller;

import com.backend.demo.model.Customer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @GetMapping
    public List<Customer> getAllCustomers() {
        return List.of(
            new Customer(1L, "John Doe", "john@example.com"),
            new Customer(2L, "Jane Smith", "jane@example.com"),
            new Customer(3L, "Bob Johnson", "bob@example.com")
        );
    }
} 