import React from 'react';
import HeaderBar from './HeaderBar';
import Home from './Home';

class App extends React.Component {
	render() {
		return (
			<div className='app-container'>
				<HeaderBar />
				<Home />
			</div>
		);
	}
}

export default App;