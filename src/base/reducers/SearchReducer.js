import {
    ACTIVE_SEARCH_SCHOOL,
    ACTIVE_SEARCH_MAJOR
} from 'base/actions/SearchAction';

function activeSearchSchool(state = {}, action) {
    switch (action.type) {
        case ACTIVE_SEARCH_SCHOOL:
            let nextState = action.res;
            return nextState;
        default:
            return state;
    }
}

function activeSearchMajor(state = {}, action) {
    switch (action.type) {
        case ACTIVE_SEARCH_MAJOR:
            let nextState = action.res;
            return nextState;
        default:
            return state;
    }
}

export const SearchReducer = {
    searchSchool: getCourse,
    searchMajor: getPeriods,
};
