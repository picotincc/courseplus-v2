import HomeService from 'base/service/HomeService';


const REQUEST_GOOD_COURSES = "REQUEST_GOOD_COURSES";
const RECEIVE_GOOD_COURSES = "RECEIVE_GOOD_COURSES";
const USER_LOGIN = "USER_LOGIN";

export {
    USER_LOGIN,
    REQUEST_GOOD_COURSES,
    RECEIVE_GOOD_COURSES
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

export function login(userId)
{
    const id = userId;
    return {
        type: USER_LOGIN,
        userId: id
    };
}

export function getHomeGoodCourses()
{
    const getDatas = () => (dispatch) => {
        dispatch(requestData(REQUEST_GOOD_COURSES, {}));
        return HomeService.getInstance().getGoodCourses()
        .then(res => {
            dispatch(receiveData(RECEIVE_GOOD_COURSES, {}, res));
        });
    };
    return getDatas();
}
