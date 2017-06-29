import axios from 'axios';
var key = 'fc618d36f70f5384f8035722981bb350';

function currentWeatherCall(citySearch) {
	return 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&type=accurate&APPID=' + key
}

function fiveDayForecastCall(citySearch) {
	return 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?q=' + citySearch + '&type=accurate&APPID=' + key + '&cnt=5';
}

function handleError (error) {
	console.warn(error);
	return null;
}



var getCurrentWeather = function (citySearch) {
	return axios.get(currentWeatherCall(citySearch))
		.then(function (response) {
			return (response.data);
		})
		.catch(handleError);
}

var getFiveDayForecast = function (citySearch) {
	return axios.get(fiveDayForecastCall(citySearch))
		.then(function (response) {
			return (response.data);
		})
		.catch(handleError);
}

export {getCurrentWeather, getFiveDayForecast};