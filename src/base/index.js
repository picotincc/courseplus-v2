import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory  } from 'react-router';

import { store } from './store/store';

import routes from './routes';




const rootElement = document.getElementById('root');

function testFetch()
{
    const url = "/v1/carousel";
    fetch(url, {
        method: "GET"
    }).then(function(response) {
        return response.json();
    }).then(res => {
        console.log(res);
    });
}
// testFetch();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}>
        </Router>
    </Provider>,
    rootElement
);
