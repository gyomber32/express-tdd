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

exports.updateTodo = async (req, res, next) => {
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.todoId, req.body, { new: true, useFindAndModify: false });
        if(!updatedTodo) {
            return res.status(404).send();
        }
        res.status(200).json(updatedTodo);
    } catch(err) {
        next(err);
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(req.params.todoId);
        if(!deletedTodo) {
            return res.status(404).send();
        }
        res.status(200).json(deletedTodo);
    } catch(err) {
        next(err);
    }
}