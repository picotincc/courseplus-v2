
import fetch from './FetchWrapper';

const version = '/v1';

export default {

    sendVerifyCode: (paras) => fetch(`${version}/user/sendVerifyCode`, {
        query: paras
    }),

    register: (paras) => fetch(`${version}/user/register`, {
        method: "POST",
        body: {
            account: paras.account,
            password: paras.password,
            verify_code: paras.verifyCode,
            nickname: paras.nickname
        }
    })
}
