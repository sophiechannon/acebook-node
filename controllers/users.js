const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.redirect('/users/new')
        req.flash('email-error-message', 'EMAIL NOT VALID');
        throw err;
      }
      res.status(201).redirect("/posts");
    });
  },
};

module.exports = UsersController;
