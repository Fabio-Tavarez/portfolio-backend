const express = require("express");
const router = express.Router();

const commentsController = require("./commentsController");
router.use("/:bookId/comments", commentsController);

const {
  getAllBooks,
  getBooksById,
  createBook,
  deleteBook,
  updateBookById,
} = require("../queries/book");

router.get("/", async (req, res) => {
  const allBooks = await getAllBooks();

  if (Array.isArray(allBooks)) {
    res.json(allBooks);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const book = await getBooksById(id);

  if (book.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(book[0]);
  }
});

router.post("/", async (req, res) => {
  const createdBook = await createBook(req.body);

  res.json(createdBook);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBook = await deleteBook(id);

  if (deletedBook.length === 0) {
    return res.status(404).json({ message: "No data found!", error: true });
  } else {
    return res.json(deletedBook[0]);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = await updateBookById(id, req.body);
 console.log(updatedBook);
  if (updatedBook.length === 0) {
    res.status(404).json({ message: "not found!", error: true });
  } else {
    res.json(updatedBook[0]);
  }
});

module.exports = router;
