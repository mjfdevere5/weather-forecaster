import React from 'react';
import PropTypes from 'prop-types';

class ZipCodeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zipcode: ''
		};
	this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this)
	}

	handleSubmitZipcode (event) {

	}

	handleUpdateZipcode (event) {
		var value = event.target.value;

		this.setState(function () {
			return {
				zipcode: value
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
					onChange={this.handleUpdateZipcode}
					value={this.state.zipcode} />
				<button
					type='button'
					className='btn btn-success'
					onClick={this.handleSubmitZipcode}>
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
	flexDir: PropTypes.string
}

export default ZipCodeForm;