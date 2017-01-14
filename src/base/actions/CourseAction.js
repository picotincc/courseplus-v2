import CourseService from 'base/service/CourseService';


const REQUEST_PERIODS = "REQUEST_PERIODS";
const RECEIVE_PERIODS = "RECEIVE_PERIODS";

export {
    REQUEST_PERIODS,
    RECEIVE_PERIODS
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
