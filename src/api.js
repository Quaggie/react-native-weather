'use strict';

let rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=75d379fc192326441cf68b994709a1fe';

function kelvinToF (kelvin) {
  // return Math.round((kelvin - 273.15) * 1.8 + 32) + '˚F';
  return Math.round(kelvin - 273.15) + ' ˚C';
}

function getUpper (str) {
  let first = str.substring(0, 1).toUpperCase();
  let rest = str.substring(1);
  return `${first}${rest}`
}

module.exports = (latitude, longitude) => {
  let url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then( (res) => {
      return res.json();
    }).then( (json) => {
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: getUpper(json.weather[0].description)
      }
    });
};
