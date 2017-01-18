import {
    UPDATE_USER_INFO
} from 'base/actions/HomeAction';

function getUserInfo(state = null, action)
{
    switch(action.type)
    {
        case UPDATE_USER_INFO:
            return action.userInfo;
        default:
            return state;
    }
}


export const HomeReducer = {
    userInfo: getUserInfo
};
