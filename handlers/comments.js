const { Comment } = require('../models/Comment');

async function createComment(req, res) {
  try {
    const { content, movie, parent } = req.body;

    const id = req.header('id');

    const comment = {
      author: id,
      content,
      movie,
    };

    if (parent) {
      comment.parent = parent;
    }

    await Comment.create(comment);

    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { createComment };
