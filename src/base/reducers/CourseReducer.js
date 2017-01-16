import {
    REQUEST_PERIODS,
    RECEIVE_PERIODS,
    SELECT_PERIOD,
    REQUEST_COURSE,
    RECEIVE_COURSE
} from 'base/actions/CourseAction';

import DateUtil from '../util/DateUtil';

function getCourse(state = [], action) {
    switch (action.type) {
        case REQUEST_COURSE:
            return state;
        case RECEIVE_COURSE:
            let nextState = action.res;
            return nextState;
        default:
            return state;
    }
}

function getPeriods(state = [], action) {
    switch (action.type) {
        case REQUEST_PERIODS:
            return state;
        case RECEIVE_PERIODS:
            let nextState = _preprocessPeriods(action.res);
            return nextState;
        default:
            return state;
    }
}

function selectPeriod(state = [], action) {
    switch (action.type) {
        case SELECT_PERIOD:
            let nextState = action.data;
            return nextState;
        default:
            return state;
    }
}

function _preprocessPeriods(periods) {
    periods.sort((a, b) => {
        let aFlag = 0;
        let bFlag = 0;
        (a.date) && ( aFlag = new Date(a.date).getTime() );
        (b.date) && ( bFlag = new Date(b.date).getTime() );
        return aFlag - bFlag;
    });
    return periods;
}

export const CourseReducer = {
    course: getCourse,
    coursePeriods: getPeriods,
    selectedPeriod: selectPeriod,
};
