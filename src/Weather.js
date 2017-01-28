/**

  Refer the the following link to understand how async works

  http://exploringjs.com/es6/ch_async.html

  For the purpose of this tutorial we have used the open weather API

  https://openweathermap.org/api

  To use the API, You need to have a appID

  Create an account at http://home.openweathermap.org/users/sign_in and refer to the API keys tab for your appID

  Try various cases with the API to see it's behaviour

 */

/**
 Utility function used to find the weather of a city by name..

 cityName is given as a input.

 appID is the your corresponding API Key

 Returns the JSON of weather data in the callback in error first way.
 */

var getWeatherByCityName = function (cityName, appID, callback) {

};

/**
 Function used to find current temperature of a city in Celsius.

 Use getWeatherByCityName to fetch the weather details of a particular city

 cityName is given as a input.

 Return the temperature of a city in celsius in the callback in error first way.

 Handle the error scenarios appropriately and map the error message in response body to the error object
 */
exports.findCurrentTemperatureByCityName = function (cityName, callback) {

};
