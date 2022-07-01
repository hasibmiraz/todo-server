const { Router } = require('express');

const router = Router();

const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

router.get('/get-todo', getTodo);
router.post('/save-todo', saveTodo);
router.put('/update-todo', updateTodo);
router.delete('/delete-todo', deleteTodo);

module.exports = router;
