public record Book(Long id, String title, String author) {
    // Records automatically provide:
    // - Constructor
    // - Getters (named as the field names)
    // - equals/hashCode
    // toString
} 