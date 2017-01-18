
import fetch from './FetchWrapper';

const version = '/v1';

export default {

    sendVerifyCode: (paras) => fetch(`${version}/user/sendVerifyCode`, {
        query: paras
    }),

    login: (paras) => fetch(`${version}/user/login`, {
        method: "POST",
        body: {
            account: paras.account,
            password: paras.password
        }
    }),

    register: (paras) => fetch(`${version}/user/register`, {
        method: "POST",
        body: {
            account: paras.account,
            password: paras.password,
            verify_code: paras.verifyCode,
            nickname: paras.nickname
        }
    }),

    resetPassword: (paras) => fetch(`${version}/user/resetPassword`, {
        method: "POST",
        body: {
            account: paras.account,
            new_password: paras.newPassword,
            verify_code: paras.verifyCode
        }
    })
}
