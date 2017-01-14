import { combineReducers } from 'redux'

import { HomeReducer } from './HomeReducer';
import { CourseReducer } from './CourseReducer';

const allReducers = combineReducers(Object.assign({}, HomeReducer, CourseReducer));

export default allReducers
