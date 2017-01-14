import {
    REQUEST_PERIODS,
    RECEIVE_PERIODS
} from 'base/actions/CourseAction';

// TODO Get Course
function getCourse(state = [], action) {
    return state;
}

function getPeriods(state = [], action) {
    switch (action.type) {
        case REQUEST_PERIODS:
            return state;
        case RECEIVE_PERIODS:
            let nextState = action.res;
            return nextState;
        default:
            return state;
    }
}

export const CourseReducer = {
    course: getCourse,
    coursePeriods: getPeriods,
};
