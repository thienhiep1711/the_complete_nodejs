const request = require('request');
const key = '89e87280f675a2a1ca3c83a819cadd23';


var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
    json:true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to Forecast.io servers");
    } else if (response.statusCode === 400) {
      callback("Unable to fetch weather.");
    } else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }
  })
}



module.exports.getWeather = getWeather;