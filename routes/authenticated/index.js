const express = require("express");
const router = express.Router();
// Routes
const weatherRoutes = require("./weather.routes");

router.use("/weather", weatherRoutes);

module.exports = router;
