const express = require("express");
const router = express.Router();

// Controller
const controller = require("../../controllers").Auth;

router.post("/signup", controller.signUp);
router.post("/login", controller.login);

module.exports = router;