import {
    USER_LOGIN,
    REQUEST_GOOD_COURSES,
    RECEIVE_GOOD_COURSES
} from 'base/actions/HomeAction';

function login(state= "cc", action)
{
    switch(action.type)
    {
        case USER_LOGIN:
            return action.userId;
        default:
            return state;
    }
}

function getGoodCourses(state = [], action)
{
    switch (action.type)
    {
        case REQUEST_GOOD_COURSES:
            return state;
        case RECEIVE_GOOD_COURSES:
            let nextState = action.res;
            return nextState;
        default:
            return state;
    }
}

export const HomeReducer = {
    userId: login,
    goodCourses: getGoodCourses
};
