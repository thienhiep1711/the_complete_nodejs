const request = require('request');
const key = 'AIzaSyBES-3s8E2zj1tnVOFg7rhZce1HVDnFS9k';

var geocodeAddress =  (address , callback) => {
  var encodeAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${key}`,
    json:true
  }, (error, response, body)=> {
    if (error) {
      callback('Unable to connect to Google servers.')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.')
      console.log('')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longtitude: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports.geocodeAddress = geocodeAddress;
