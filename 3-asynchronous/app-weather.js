const request = require('request');
const key = '89e87280f675a2a1ca3c83a819cadd23';

request({
  url: `https://api.darksky.net/forecast/${key}/40.444271,-74.5639037`,
  json:true
}, (error, response, body) => {
  if (error) {
    console.log("Unable to connect to Forecast.io servers");
  } else if (response.statusCode === 400) {
    console.log("Unable to fetch weather.")
  } else if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log("Unable to fetch weather.")
  }
})


// const yargs = require('yargs');
// const  geocode = require('./geocode/geocode');

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias:'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });
