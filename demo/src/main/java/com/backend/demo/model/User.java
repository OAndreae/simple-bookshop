package com.backend.demo.model;

public record User(Long id, String name, String email) {
    // Records automatically provide:
    // - Constructor
    // - Getters (named as the field names)
    // - equals/hashCode
    // - toString
} 