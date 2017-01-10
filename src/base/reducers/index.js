import { combineReducers } from 'redux'

import {HomeReducer} from './HomeReducer';

const allReducers = combineReducers(HomeReducer);

export default allReducers
