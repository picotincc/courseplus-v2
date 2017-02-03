import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';


const middlewares = [thunk];

if ( process.env.NODE_ENV !== `production`) {
    const logger = createLogger();
    middlewares.push(logger);
}

export const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);
