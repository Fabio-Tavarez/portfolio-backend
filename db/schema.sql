DROP DATABASE IF EXISTS books_dev;

CREATE DATABASE books_dev;

\c books_dev;

DROP TABLE IF EXISTS book;

CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    volume INT NOT NULL,
    series TEXT NOT NULL,
    price INT NOT NULL,
    author TEXT,
    rating INT,
    favorite BOOLEAN,
    genre TEXT,
    description TEXT,
    image_path VARCHAR(255)
);


DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commenter TEXT NOT NULL,
    content TEXT,
    book_id INTEGER REFERENCES book (id) ON DELETE CASCADE
);