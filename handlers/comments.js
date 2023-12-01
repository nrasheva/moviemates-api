const { Comment } = require('../models/Comment');

async function createComment(req, res) {
  const authorId = req.header('id');
  const { content, movie, parent } = req.body;

  if (!content || !content.length) {
    res.status(400).json({ message: 'content not provided' });
    return;
  } else if (!movie || typeof movie !== 'number') {
    res.status(400).json({ message: 'movie must be a number' });
    return;
  }

  try {
    const comment = {
      author: authorId,
      content,
      created: Math.floor(new Date().getTime() / 1000.0),
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

async function deleteComment(req, res) {
  const id = req.query.id;
  const userId = req.header('id');

  if (!id) {
    res.status(400).json({ message: 'id parameter not provided' });
    return;
  }

  try {
    const comment = await Comment.findById(id);

    const author = comment.author.toHexString();

    if (author !== userId) {
      res.status(403).json({ message: 'not allowed to access resource' });
      return;
    }

    await Comment.findByIdAndDelete(id);

    // Delete comment children
    await Comment.deleteMany({ parent: id });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function editComment(req, res) {
  const content = req.body.content;
  const id = req.query.id;
  const userId = req.header('id');

  if (!content) {
    res.status(400).json({ message: 'content not provided' });
    return;
  } else if (!id) {
    res.status(400).json({ message: 'id parameter not provided' });
    return;
  }

  try {
    const comment = await Comment.findById(id);

    const author = comment.author.toHexString();

    if (author !== userId) {
      res.status(403).json({ message: 'not allowed to access resource' });
      return;
    }

    const updatedComment = await Comment.findByIdAndUpdate(id, { content, edited: true }, { new: true });

    if (!updatedComment) {
      res.status(404).json({ message: 'comment not found' });
      return;
    }

    res.status(200).json({ updatedComment });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getComments(req, res) {
  const id = req.query.id;

  if (!id) {
    res.status(400).json({ message: 'id parameter not provided' });
    return;
  }

  try {
    const comments = await Comment.find({ movie: id }).populate('author', 'email').exec();

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { createComment, deleteComment, editComment, getComments };
