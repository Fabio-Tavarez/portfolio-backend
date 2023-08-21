const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getAllComments,
  getCommentsById,
  deleteCommentById,
  getAllCommentsOnBookId,
  createComment,
  updateCommentById,
} = require("../queries/comments");

router.get("/", async (req, res) => {
  const { bookId } = req.params;
  const allComments = await getAllComments(bookId);

  if (allComments.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(allComments);
  }
});

router.get("/:commentId", async (req, res) => {
  const { bookId, commentId } = req.params;
  try {
    const comment = await getCommentsById(bookId, commentId);

    if (comment.length === 0) {
      throw {
        status: 404,
        message: "Comment not found",
      };
    } else {
      return res.json(comment[0]);
    }
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedComment = await deleteCommentById(id);

  if (deletedComment.length === 0) {
    return res.status(404).json({ error: "Comment not found" });
  } else {
    return res.json(deletedComment[0]);
  }
});

router.post("/", async (req, res) => {
  const createdComment = await createComment(req.body);

  res.json(createdComment[0]);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedComment = await updateCommentById(id, req.body);

  if (updatedComment.length === 0) {
    return res.status(404).json({ error: "Comment not found" });
  } else {
    return res.json(updatedComment[0]);
  }
});

// router.get("/:bookId/get-all-comments", async (req, res) => {
//   const { bookId } = req.params;

//   try {
//     const allCommentsById = await getAllCommentsOnBookId(bookId);

//     if (allCommentsById.length === 0) {
//       return res.status(404).json({ error: "Comment not found" });
//     } else {
//       return res.json(allCommentsById);
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
module.exports = router;
