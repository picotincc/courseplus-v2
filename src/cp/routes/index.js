import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';


const search = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('../containers/SearchContainer.js').default);
	}, 'search');
};

const home = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('../containers/HomeContainer.js').default);
	}, 'home');
};

const routes = (
    <div>
		<Route path='/' component={App}>
			<IndexRoute getComponent={home} />
            <Route path='home' getComponent={home} />
			<Route path='search' getComponent={search} />
		</Route>
    </div>
);

export default routes;
