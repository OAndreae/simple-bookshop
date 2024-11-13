package com.backend.demo.controller;

import com.backend.demo.model.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @GetMapping
    public List<Book> getAllBooks() {
        return List.of(
            new Book(1L, "The Great Gatsby", "F. Scott Fitzgerald"),
            new Book(2L, "1984", "George Orwell"),
            new Book(3L, "Pride and Prejudice", "Jane Austen")
        );
    }
} 