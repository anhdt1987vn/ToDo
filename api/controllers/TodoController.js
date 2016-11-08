const util = require('util');

module.exports = {
    getTodos: function(req, res) {
        console.log(sails.config.myconf);
        console.log(util.inspect(sails.config.myconf, false, null))
        TodoService.getTodos(function(todos) {
            console.log("api/controllers/TodoController/getTodos: " + util.inspect(todos));
            res.json(todos)
        })
    },
    addTodo: function(req, res) {
        console.log("api/controllers/TodoController/addTodo: " + req.body);
        var todoVal = (req.body.value) ? req.body.value : undefined
        TodoService.addTodo(todoVal, function(success) {
            res.json(success)
        })
    },
    removeTodo: function(req, res) {
        var todoVal = (req.body.value) ? req.body.value : undefined
        console.log("api/controllers/TodoController/removeTodo: " + util.inspect(req.body));
        TodoService.removeTodo(todoVal, function(success) {
            res.json(success)
        })
    }
}