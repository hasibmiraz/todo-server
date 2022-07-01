const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('TodoSchema', TodoSchema);
