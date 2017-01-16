import CourseService from 'base/service/CourseService';

const REQUEST_PERIODS = "REQUEST_PERIODS";
const RECEIVE_PERIODS = "RECEIVE_PERIODS";
const SELECT_PERIOD = "SELECT_PERIOD";

const REQUEST_COURSE = "REQUEST_COURSE";
const RECEIVE_COURSE = "RECEIVE_COURSE";

export {
    REQUEST_PERIODS,
    RECEIVE_PERIODS,
    SELECT_PERIOD,
    REQUEST_COURSE,
    RECEIVE_COURSE
};

const requestData = (type, data) => ({
    type: type,
    data
});

const receiveData = (type, data, res) => ({
    type: type,
    data,
    res: res,
    receivedAt: Date.now()
});

const updateData = (type, data) => ({
    type: type,
    data,
    updatedAt: Date.now()
});

export function getPeriods(courseId) {
    const getDatas = () => (dispatch) => {
        dispatch(requestData(REQUEST_PERIODS, {}));
        return CourseService.getPeriods(courseId)
        .then((res) => {
            dispatch(receiveData(RECEIVE_PERIODS, {}, res));
        }).catch((err) => {
            console.log(err);
        });
    };
    return getDatas();
}

export function selectPeriod(period) {
    return updateData(SELECT_PERIOD, period);
}

export function getCourse(courseId) {
    const getDatas = () => (dispatch) => {
        dispatch(requestData(REQUEST_COURSE, {}));
        return CourseService.getCourse(courseId)
        .then((res) => {
            dispatch(receiveData(RECEIVE_COURSE, {}, res));
        }).catch((err) => {
            console.log(err);
        });
    };
    return getDatas();
}
