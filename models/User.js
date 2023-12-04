const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  watchlist: { type: [Number] },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
