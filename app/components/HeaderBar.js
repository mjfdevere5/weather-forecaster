import React from 'react';
import ZipCodeForm from './ZipCodeForm';

function HeaderBar () {
	return (
		<div className='header-bar'>
			<h1>Garbage app 🌞</h1>
			<ZipCodeForm flexDir='row' />
		</div>
	);
}

export default HeaderBar;