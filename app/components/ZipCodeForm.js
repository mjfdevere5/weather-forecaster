import React from 'react';
import PropTypes from 'prop-types';
import {getCurrentWeather, getFiveDayForecast} from '../utils/api';

class ZipCodeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			citySearch: ''
		};
		this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
		this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
	}

	handleSubmitSearch () {
		getCurrentWeather(this.state.citySearch);
	}

	handleUpdateSearch (event) {
		var value = event.target.value;

		this.setState(function () {
			return {
				citySearch: value
			}
		})
	}

	render () {
		var givenStyles = {
			flexDirection: this.props.flexDir
		};

		return (
			<div
				className='zipcode-container'
				style={givenStyles}>
				<input
					className='zipcode-box'
					placeholder='Paris, Texas'
					type='text'
					onChange={this.handleUpdateSearch}
					value={this.state.citySearch} />
				<button
					type='button'
					className='btn btn-success'
					disabled={!this.state.citySearch}
					onClick={this.handleSubmitSearch}>
					Get weather
				</button>
			</div>
		);
	}
}

ZipCodeForm.defaultProps = {
	flexDir: 'column'
}

ZipCodeForm.propTypes = {
	flexDir: PropTypes.string,
	// onSubmit: PropTypes.func.isRequired
}

export default ZipCodeForm;