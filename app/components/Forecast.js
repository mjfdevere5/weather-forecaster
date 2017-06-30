import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {getFiveDayForecast} from '../utils/api';
import {getDate} from '../utils/helpers';
import Loading from './Loading';

class Forecast extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			weatherData: null
		};
	}

	getNewWeatherData (props) {
		var citySearch = queryString.parse(props.location.search).citySearch;
		getFiveDayForecast(citySearch)
			.then(function (results) {
				this.setState({
					weatherData: results
				});
		}.bind(this));
	}

	componentDidMount () {
		this.getNewWeatherData(this.props);
	}

	componentWillReceiveProps (newProps) {
		this.getNewWeatherData(newProps);
	}

	render () {
		return (
			<div className='forecast-container'>
				{ !this.state.weatherData ?
						<Loading /> : (
						<div>
							<h1 className='headerText' style={{color:'black'}}>{this.state.weatherData.city.name}, {this.state.weatherData.city.country}</h1>
							<ForecastGrid data={this.state.weatherData} />
						</div>
				)}
			</div>
		);
	}
}

function ForecastGrid (props) {
	var gridItems = [];
	for (var index in props.data.list) {
			gridItems.push(<GridItem fcst={props.data.list[index]} key={"key_" + index} />)
		}
	return <div className='forecast-grid'>{gridItems}</div>;
}

function GridItem (props) {
	var date = getDate(props.fcst.dt);
	var weatherIcon = props.fcst.weather[0].icon;
	var imageSrc = weatherIcon + '.svg';
	console.log(imageSrc);
	var alt = props.fcst.weather[0].description;
	return (
		<div className='grid-item'>
		<img src={imageSrc} alt={alt} className='weather-icon' />
			<h2 className='date-subheader'>{date}</h2>
		</div>	
	);
}

Forecast.propTypes = {
	// citySearch: PropTypes.string.isRequired
};

export default Forecast;