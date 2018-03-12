export interface Book {
    categoryId: String,
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String,
    updated_date: { type: Date },
}

export interface Category {
    title: String,
    description: String
}