# weather-app-it

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/bennycwlau/weather-app-it.git)

weather-app-it is a NodeJS application that can get a country's weather conditions.

The application has the below end-points
  - Login (/api/auth/login)
  - Sign Up (/api/auth/signup)
  - Search Weather (/api/weather?query={Country Name})

### Requirements

weather-app-it requires [Node.js](https://nodejs.org/) v8+ to run.

### Steps

Make sure a Mongod instance is running on localhost:27017

DEV env

```sh
$ git clone https://github.com/bennycwlau/weather-app-it.git
$ cd weather-app-it
$ npm install
$ npm run dev
```

PROD env

```sh
$ git clone https://github.com/bennycwlau/weather-app-it.git
$ cd weather-app-it
$ npm install
$ npm run start
```

The steps below requires the use of a HTTP client like Postman.

Create an account. This account will be saved to the users collection of weatherDB

Login with your account. Store the token that is returned in the response body

Query the weather and provide the token in the authentication header