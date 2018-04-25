var axios = require('axios');
var key = '9ea1ce6b58cc6591c1ecd9da7dd3451e';
var apikey = 'fb0cd57055510f758c7a3165bb218981';

module.exports={
	fetchFiveDayForecast: function (city) {
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city + '&type=accurate&APPID='+ apikey + '&cnt=5');	
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data;
      });
  }
}
