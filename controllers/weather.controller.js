const authHelper = require("../helpers").Weather;

const get = (req, res) => {
  console.log("get weather Controller")
  authHelper.getWeather(req.query.query)
    .then((success) => res.status(200).send({
      data: success,
      message: "Success"
    }))
    .catch((error) => res.status(400).send({
      data: error,
      message: "Error"
    }));
};

module.exports = {
  get
}