const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export {
    UPDATE_USER_INFO
};

export function updateUserInfo(info)
{
    const userInfo = info;
    return {
        type: UPDATE_USER_INFO,
        userInfo
    };
}
