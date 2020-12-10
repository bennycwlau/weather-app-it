const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

// Mongoose and models
const mongoose = require("mongoose");
const User = mongoose.model("User");

const signUp = (data) => {
  console.log("signUp Helper")

  return new Promise((resolve, reject) => {
    User.findOne({
      email: data.email
    }).then((user) => {
      if (user) return reject({
        error: "Email already registered"
      });
      else {
        data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
        User.create(data)
          .then(created => resolve(_.omit(created._doc, ["password"])))
          .catch(error => {
            console.log(error);
            return reject(error)
          })
      }
    });
  });
};

const login = (data) => {
  console.log("login Helper")
  return new Promise((resolve, reject) => {
    User.findOne({
        email: data.email
      })
      .then((user) => {
        if (user) {
          if (!bcrypt.compareSync(data.password, user.password)) return reject({
            error: "Invalid credentials!"
          });
          else {
            var token = jwt.sign({
              email: user.email,
              _id: user._id,
              name: user.name
            }, process.env.JWT_SECRET, {
              expiresIn: "1y"
            });
            return resolve({
              user: _.omit(user, ["password"]),
              token: token
            })
          }
        } else return reject({
          error: "Invalid Credentials!"
        });
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
};

module.exports = {
  login,
  signUp
}