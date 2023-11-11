const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: { ref: 'User', required: true, type: mongoose.Schema.Types.ObjectId },
  content: { required: true, type: String },
  dislikes: { default: 0, type: Number },
  likes: { default: 0, type: Number },
  movie: { required: true, type: Number },
  parent: { ref: 'Comment', type: mongoose.Schema.Types.ObjectId },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
