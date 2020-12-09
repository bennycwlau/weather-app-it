const authHelper = require("../helpers").Auth;

const signUp = (req, res) => {
    console.log("signUp Controller")
    authHelper.signUp(req.body)
        .then((success) => res.status(200).send({ data: success, message: "Account Created" }))
        .catch((error) => res.status(400).send({ data: error, message: "Error" }));
};

const login = (req, res) => {
    console.log("login Controller")
    authHelper.login(req.body)
        .then((success) => res.status(200).send({ data: success, message: "Account Created" }))
        .catch((error) => res.status(500).send({ data: error, message: "Error" }));
};

module.exports = {
    login,
    signUp
}