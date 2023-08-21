const db = require("../db/dbConfig");

const getAllComments = async (book_id) => {
  try {
    const allComments = await db.any(
      "SELECT * FROM comments where book_id = $1 ORDER BY id ASC",
      book_id
    );
    return allComments;
  } catch (error) {
    return error;
  }
};

const getCommentsById = async (bookId, commentId) => {
  try {
    const oneComment = await db.any(
      `
        SELECT BOOK_ID,
            COMMENTER,
            CONTENT,
        FROM BOOKMARKS
        JOIN REVIEWS ON BOOK.ID = REVIEWS.BOOK_ID
        WHERE BOOK.ID = $1
            AND COMMENTS.ID = $2;
    `,
      [bookId, commentId]
    );
    return oneComment;
  } catch (error) {
    return error;
  }
};

const deleteCommentById = async (id) => {
  try {
    const deleteComment = await db.any(
      `DELETE FROM comments WHERE id = $1 RETURNING *`,
      id
    );

    return deleteComment;
  } catch (error) {
    return error;
  }
};

const getAllCommentsOnBookId = async (book_id) => {
  try {
    const allComments = await db.any(
      `SELECT * FROM book INNER JOIN comments ON comments.book_id = book.id WHERE comments.book_id = $1 `,
      book_id
    );

    return allComments;
  } catch (error) {
    return error;
  }
};

const createComment = async (comments) => {
  try {
    const newComment = await db.any(
      `INSERT INTO reviews (book_id, commenter, content) VALUES ($1, $2, $3) RETURNING *`,
      [comments.book_id, comments.commenter, comments.content]
    );

    return newComment;
  } catch (error) {
    return error;
  }
};

const updateCommentById = async (id, comments) => {
  let { commenter, content } = comments;
  try {
    const updatedReview = await db.any(
      `UPDATE comments SET commenter = $1,  content = $2 WHERE id = $3 RETURNING *`,
      [commenter, content, id]
    );

    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllComments,
  getCommentsById,
  deleteCommentById,
  getAllCommentsOnBookId,
  createComment,
  updateCommentById,
};
