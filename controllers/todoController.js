const TodoModel = require('../models/todoModel');

module.exports.getTodo = async (req, res) => {
  const Todo = await TodoModel.find();
  res.status(200).send(Todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text, completed } = req.body;
  TodoModel.create({ text, completed })
    .then(() => res.status(201).send('Todo created successfully!'))
    .catch((err) => console.log(err));
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.status(201).send('Todo updated successfully!'))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.status(201).send('Todo deleted successfully!'))
    .catch((err) => console.log(err));
};
