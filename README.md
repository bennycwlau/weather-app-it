# weather-app-it

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/bennycwlau/weather-app-it.git)

weather-app-it is a NodeJS application that can get a country's weather conditions.

### End-points

  - Login (/api/auth/login)
  - Sign Up (/api/auth/signup)
  - Search Weather (/api/weather?query={Country Name})

### Requirements

weather-app-it requires [Node.js](https://nodejs.org/) v8+ and MongoDB to run.

### Steps

Make sure a Mongod instance is running on localhost:27017 before starting this application

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

http://localhost:3000/api/auth/signup (POST)

```sh
{
    "name":"Benny",
    "email":"bennycwlau@gmail.com",
    "password":"123456"
}
```

Login with your account. Copy the token that is returned in the response body

http://localhost:3000/api/auth/login (POST)

```sh
{
    "email":"bennycwlau@gmail.com",
    "password":"123456"
}
```

Query the weather and paste the token in the authentication header. This weather data will be saved to the weathers collection of weatherDB

http://localhost:3000/api/weather?query=Hong Kong (GET)

```sh
Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbmRyaWNrQGdtYWlsLmNvbSIsIl9pZCI6IjVmZDIwNDQ2NDZiMWMwNmNkNTZmNjUyNiIsIm5hbWUiOiJLZW5kcmljayIsImlhdCI6MTYwNzU5OTE5NCwiZXhwIjoxNjM5MTU2Nzk0fQ.oaDt_SMP2MjleEjCJ8D5GVI948lXZb8VGt6dPGeerZw
```