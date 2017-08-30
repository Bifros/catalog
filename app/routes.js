import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './components/About';
import Products from './containers/Products';

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/products/:productsLink" component={Products} />
	</Switch>
);
