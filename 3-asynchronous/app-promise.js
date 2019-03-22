const yargs = require('yargs');
const axios = require('axios');
const keyMap = 'AIzaSyBES-3s8E2zj1tnVOFg7rhZce1HVDnFS9k';
const keyWeather = '89e87280f675a2a1ca3c83a819cadd23';

const argv = yargs
  .options({
    a: {
      demand: true,
      alias:'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


  var encodeAddress = encodeURIComponent(argv.address);
  var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${keyMap}`;
  axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address');
    }
     
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl  = `https://api.darksky.net/forecast/${keyWeather}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  }).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It'currently ${temperature}. It feels like ${apparentTemperature}`);
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
       console.log("Unable to connect to API servers.");
    } else {
      console.log(e.message);
    }
  })