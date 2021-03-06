const express = require('express');
const TodoController = require('../controllers/todoController');

const app = express();

app.get('/todos', TodoController.getTodos);

app.post('/todos', TodoController.createTodo);

app.get('/todos/:id', TodoController.getTodoById);

app.put('/todos/:id', TodoController.updateTodo);

app.delete('/todos/:id', TodoController.deleteTodo);

app.get('/uploads/:fileName', TodoController.getFile);

module.exports = app;