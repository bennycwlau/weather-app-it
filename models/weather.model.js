const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Float = require('mongoose-float').loadType(mongoose);

const WeatherSchema = new Schema({

  coord: {
    type: {
      lon: {
        type: Float,
        default: 0.0
      },
      lat: {
        type: Float,
        default: 0.0
      }
    },
    default: {}
  },
  weather: {
    type: {
      id: Number,
      main: String,
      description: String,
      icon: String
    },
    default: {}
  },
  base: {
    type: String,
    default: ""
  },
  main: {
    type: {
      temp: Float,
      feels_like: Float,
      temp_min: Float,
      temp_max: Float,
      pressure: Number,
      humidity: Number,
      sea_level: Number,
      grnd_level: Number
    },
    default: {}
  },
  visibility: {
    type: Number,
    default: 0.0
  },
  wind: {
    type: {
      speed: Float,
      deg: Number
    },
    default: {}
  },
  clouds: {
    type: {
      all: Number
    },
    default: {}
  },
  dt: {
    type: Number,
    default: 0
  },
  sys: {
    type: {
      country: String,
      sunrise: Number,
      sunset: Number
    },
    default: {}
  },
  timezone: {
    type: Number,
    default: 0
  },
  id: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: ""
  },
  cod: {
    type: Number,
    default: 0
  },
  search: {
    type: String,
    default: ""
  }
})

module.exports = mongoose.model("Weather", WeatherSchema)