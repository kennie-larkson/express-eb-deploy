const { Router } = require("express");
const controllers = require("../controllers/index");

const router = new Router();
router.get("/", controllers.home);
router.get("/users", controllers.users);

module.exports = router;
