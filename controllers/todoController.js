const ToDoModel = require('../models/toDoModel');

module.exports.getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.saveToDo = (req, res) => {
  const { text, completed } = req.body;

  ToDoModel.create({ text, completed })
    .then(() => res.set(201).send('Added Successfully...'))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send('Deleted Successfully...'))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send('Updated Successfully...'))
    .catch((err) => console.log(err));
};
