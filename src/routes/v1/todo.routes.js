const express=require('express');
const { getTodos,createTodo } = require('../../controllers/todo.controllers');
const { createTodoValidator } = require('../../validators/todo.validator');

const todorouter=express.Router();

todorouter.get('/',getTodos);
todorouter.post('/',createTodoValidator,createTodo);
module.exports=todorouter;
