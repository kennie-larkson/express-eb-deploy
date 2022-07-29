var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Kennie! Elastic Beanstalk App" });
// });
router.get("/", function (req, res, next) {
  res.send("Welcome to Kennie, Elastic Beanstalk App.");
});

module.exports = router;
