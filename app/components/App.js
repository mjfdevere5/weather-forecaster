import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderBar from './HeaderBar';
import Footer from './Footer';
import Home from './Home';
import Forecast from './Forecast';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='app-container'>
					<HeaderBar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/forecast' component={Forecast} />
						<Route render={function () {
							return <p>Not Found</p>
						}} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;