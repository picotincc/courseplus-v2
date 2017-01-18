const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const TOGGLE_LOGIN = "TOGGLE_LOGIN";

export {
    UPDATE_USER_INFO,
    TOGGLE_LOGIN
};

export function updateUserInfo(info)
{
    const userInfo = info;
    return {
        type: UPDATE_USER_INFO,
        userInfo
    };
}

export function toggleLogin(value)
{
    const isToggleLogin = value;
    return {
        type: TOGGLE_LOGIN,
        isToggleLogin
    };
}
