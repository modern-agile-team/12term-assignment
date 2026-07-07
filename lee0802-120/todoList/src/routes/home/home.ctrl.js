const login = (req, res) => {
    res.render("home/login");
};

const todoList = (req, res) => {
    res.render("home/todo");
};

module.exports = {
    login,
    todoList
}