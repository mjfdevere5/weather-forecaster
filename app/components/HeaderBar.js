import React from 'react';
import {Link} from 'react-router-dom';
import ZipCodeForm from './ZipCodeForm';

function HeaderBar (props) {
	return (
		<div className='header-bar'>
			<Link className='appLogo' to='/'><h1>Weatherrr app 🌞</h1></Link>
			<ZipCodeForm flexDir='row' />
		</div>
	);
}

export default HeaderBar;