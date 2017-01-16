import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory  } from 'react-router';

import { store } from './store/store';

import routes from './routes';




const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}>
        </Router>
    </Provider>,
    rootElement
);
