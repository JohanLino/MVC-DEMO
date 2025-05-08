const User = require('../models/userModel');
const usersView = require('../views/usersView');

exports.getUsers = (req, res) => {
  const users = User.getAllUsers();
  const html = usersView.render(users);
  res.send(html);
};
