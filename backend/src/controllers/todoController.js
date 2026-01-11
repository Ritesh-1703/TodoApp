const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
    const todos = await Todo.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(todos);
};

exports.createTodo = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ message: "Title is requried" });
    }

    const todo = await Todo.create({
        user: req.user,
        title: req.body.title,
        date
    });

    res.json(todo);
};

exports.updateTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(404).json({ message: "Todo not found" });
    }
    if (todo.user.toString() !== req.user) {
        return res.status(401).json({ message: "Not authorized" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedTodo);
};


exports.deleteTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.user.toString() !== req.user) {
        return res.status(400).json({ message: "Not authorized" });
    }

    await todo.deleteOne();

    res.json({ message: "Todo removed" });
}