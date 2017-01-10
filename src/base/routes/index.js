import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'base/containers/App.js';

const home = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('home/containers/HomeContainer.js').default);
	}, 'home');
};

const search = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('search/containers/SearchContainer.js').default);
	}, 'search');
};

const course = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('course/containers/CourseContainer.js').default);
	}, 'course');
};

const user = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('user/containers/UserContainer.js').default);
	}, 'user');
};

const order = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('order/containers/OrderContainer.js').default);
	}, 'order');
};

const myCourse = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('mycourse/containers/MyCourseContainer.js').default);
	}, 'mycourse');
};


const routes = (
    <div>
		<Route path='/' component={App}>
			<IndexRoute getComponent={home} />
            <Route path='home' getComponent={home} />
			<Route path='search' getComponent={search} />
			<Route path='course' getComponent={course} />
			<Route path='user' getComponent={user} />
			<Route path='order' getComponent={order} />
			<Route path='mycourse' getComponent={myCourse} />
		</Route>
    </div>
);

export default routes;
