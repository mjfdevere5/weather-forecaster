import axios from 'axios';
var key = 'fc618d36f70f5384f8035722981bb350';

function currentWeatherCall(citySearch) {
	return 'http://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&type=accurate&APPID=' + key
}

function fiveDayForecastCall(citySearch) {
	return 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + citySearch + '&type=accurate&APPID=' + key + '&cnt=5';
}

var getCurrentWeather = function (citySearch) {
	axios.get(currentWeatherCall(citySearch))
		.then(function (response) {
			console.log(response.data);
		});
}

var getFiveDayForecast = function (citySearch) {
	axios.get(fiveDayForecastCall(citySearch))
		.then(function (response) {
			console.log(response.data);
		});
}

export {getCurrentWeather, getFiveDayForecast};