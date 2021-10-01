import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom'
import App from './App';
import MoviesDetail from './components/MoviesDetail';

const history = createBrowserHistory();

const AppRoute=()=>{
	return(
		<Router  history={history}>
			<Switch>
				<Route exact path="/view/:id" name="Detail" component={MoviesDetail}/>
				<Route path="/" name="Home" component={App}/>
			</Switch>
		</Router>
	)
}

export default AppRoute;