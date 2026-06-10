const server = require("express");
const router = server.Router();
const { register, login } = require("../controller/auth_controller");
router.post("/register", register);
router.post("/login", login);
module.exports = router;
