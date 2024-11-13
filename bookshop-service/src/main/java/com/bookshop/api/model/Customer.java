package com.backend.demo.model;

public record Customer(Long id, String name, String email) {
    // Records automatically provide:
    // - Constructor
    // - Getters (named as the field names)
    // - equals/hashCode
    // - toString
} 