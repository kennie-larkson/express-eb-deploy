class AppControllers {
  home(req, res, next) {
    return res.send("Welcome to Kennie, Elastic Beanstalk App.");
  }

  users(req, res, next) {
    return res.send("This is the Users endpoint.");
  }
}
const controllers = new AppControllers();

module.exports = controllers;
