import {
    UPDATE_USER_INFO,
    TOGGLE_LOGIN
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

function toggleLogin(state = false, action)
{
    switch(action.type)
    {
        case TOGGLE_LOGIN:
            return action.isToggleLogin;
        default:
            return state;
    }
}


export const HomeReducer = {
    userInfo: getUserInfo,
    isToggleLogin: toggleLogin
};
