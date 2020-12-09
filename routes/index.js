var express = require('express');
var router = express.Router();

// importing route types
const authenticatedRoutes = require("./authenticated");
const unauthenticatedRoutes = require("./unauthenticated");

// importing middleware
const middleware = require("../middleware")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Weather API'
  });
});

router.use("/api", unauthenticatedRoutes, middleware.authenticate, authenticatedRoutes)

module.exports = router;
