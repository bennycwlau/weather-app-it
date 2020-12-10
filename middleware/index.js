var jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

// authenticate incoming request tokens
const authenticate = (req, res, next) => {
  var authorization = req.header("Authorization");

  if (authorization) {
    jwt.verify(authorization, process.env.JWT_SECRET, function(err, token_decoded) {
      if (err) {
        return res.status(403).send({
          success: false,
          message: "Failed to authenticate token"
        });
      } else
        User.findById(token_decoded._id).then((user) => {
          if (user) {
            console.log(token_decoded)
            next()
          } else return res.status(403).json({
            success: false,
            message: "Failed to authenticate token"
          });
        });
    });
  } else return res.status(403).send({
    success: false,
    message: "No Token Provided"
  });
};

module.exports = {
  authenticate
};