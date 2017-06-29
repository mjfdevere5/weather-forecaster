import React from 'react';
import ZipCodeForm from './ZipCodeForm';

class Home extends React.Component {
	render() {
		// console.log("here we here we \n" + JSON.stringify(this.props, null, "  "));
		return (
			<div
				className='home-container'
			>
				<h1 className='headerText'>Enter a city and a state</h1>
				<ZipCodeForm flexDir='column' />
			</div>
		);
	}
}

export default Home;