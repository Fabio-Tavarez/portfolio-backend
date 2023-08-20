const db = require("../db/dbConfig");

const getAllBooks = async () => {
  try {
    const allBooks = await db.any("SELECT * FROM book");
    return allBooks;
  } catch (error) {
    return error;
  }
};

const getBooksById = async (id) => {
  try {
    const oneBook = await db.any("SELECT * FROM book WHERE id=$1", id);
    return oneBook;
  } catch (error) {
    return error;
  }
};

const createBook = async (data) => {
  try {
    const newBook = await db.one(
      "INSERT INTO book (volume, series, price, author, rating, favorite, genre, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        data.volume,
        data.series,
        data.price,
        data.author,
        data.rating,
        data.favorite,
        data.genre,
        data.description,
      ]
    );

    return newBook;
  } catch (e) {
    return e;
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await db.any(
      "DELETE FROM book WHERE id = $1 RETURNING *",
      id
    );
    return deletedBook;
  } catch (error) {
    return error;
  }
};

const updateBookById = async (id, book) => {
  try {
    const updatedBook = await db.any(
      "UPDATE book set volume = $1, series = $2, price = $3, author = $4, rating = $5, favorite = $6, genre = $7, description = $8WHERE id = $9 RETURNING *"[
        (book.volume,
        book.series,
        book.price,
        book.author,
        book.rating,
        book.favorite,
        book.genre,
        book.description,
        id)
      ]
    );
    return updatedBook;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBooks,
  getBooksById,
  createBook,
  deleteBook,
  updateBookById,
};
