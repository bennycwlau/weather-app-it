//Mongoose and models
const mongoose = require("mongoose");
const Weather = mongoose.model("Weather");
const isUp = require('is-up');
const axios = require("axios");

const getWeather = (query) => {
  console.log("getWeather Helper")

  return new Promise(async (resolve, reject) => {
    if (await isUp(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.WEATHER_KEY}`)) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.WEATHER_KEY}`)
        .then(function(response) {
          // handle success
          let data = response.data;
          data.search = query
          Weather.create(data)
            .then(created => resolve(created))
            .catch(error => {
              console.log(error);
              return reject(error)
            })
        })
        .catch(function(error) {
          // handle error
          console.log(error);
          return reject(error.response.data)
        })
    } else {
      Weather.find({
          $or: [{
            name: new RegExp(query, "i")
          }, {
            search: new RegExp(query, "i")
          }]
        }).sort({
          _id: -1
        }).limit(1)
        .then(found => found.length > 0 ? resolve(found[0]) : reject({
          error: "No data found"
        }))
        .catch(error => {
          console.log(error);
          return reject(error)
        })

    }
  });
};

module.exports = {
  getWeather
}