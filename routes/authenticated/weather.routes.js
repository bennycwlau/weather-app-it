const express = require("express");
const router = express.Router();

//Controller
const controller = require("../../controllers").Weather;

router.get("/", controller.get);

module.exports = router;