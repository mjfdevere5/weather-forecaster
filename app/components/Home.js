import React from 'react';
import ZipCodeForm from './ZipCodeForm';

var homeContainerStyles = {
	backgroundImage: "url('app/images/pattern.svg')"
};

function Home () {
	return (
		<div
			className='home-container'
			style={homeContainerStyles}
		>
			<h1 className='home-header'>Enter a city and a state</h1>
			<ZipCodeForm flexDir='column' />
		</div>
	);
}

export default Home;