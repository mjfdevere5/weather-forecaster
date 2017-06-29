import React from 'react';
import PropTypes from 'prop-types';
import {getCurrentWeather, getFiveDayForecast} from '../utils/api';
import {withRouter} from 'react-router-dom';

class ZipCodeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			citySearch: ''
		};
		this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
		this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleSubmitSearch () {
		var newPath = '/forecast?citySearch=' + this.state.citySearch;
		this.props.history.push(newPath);
	}

	handleUpdateSearch (event) {
		var value = event.target.value;

		this.setState(function () {
			return {
				citySearch: value
			}
		})
	}

	handleKeyDown(event) {
		if (event.key === "Enter" && this.state.citySearch !== "") {
			this.handleSubmitSearch();
		}
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
					onKeyDown={this.handleKeyDown}
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

export default withRouter(ZipCodeForm);