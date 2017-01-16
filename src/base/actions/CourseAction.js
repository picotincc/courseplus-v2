import CourseService from 'base/service/CourseService';

const REQUEST_PERIODS = "REQUEST_PERIODS";
const RECEIVE_PERIODS = "RECEIVE_PERIODS";
const SELECT_PERIOD = "SELECT_PERIOD";

export {
    REQUEST_PERIODS,
    RECEIVE_PERIODS,
    SELECT_PERIOD
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

