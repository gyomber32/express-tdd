const TodoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
    try {
        const createdTodo = await TodoModel.create(req.body);
        res.status(201).json(createdTodo);
    } catch (err) {
        next(err);
    }
};

exports.getTodos = async (req, res, next) => {
    try {
        const allTodos = await TodoModel.find({});
        res.status(200).json(allTodos);
    } catch (err) {
        next(err);
    }
};

exports.getTodoById = async (req, res, next) => {
    try {
        const todoModel = await TodoModel.findById(req.params.todoId);
        if(!todoModel) {
            return res.status(404).send();
        }
        res.status(200).json(todoModel);
    } catch (err) {
        next(err);
    }
}