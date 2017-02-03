const data = {
    "/v1/user/sendVerifyCode": {
        GET: (req, res) => {
            if (req.query.use_page == 0)
            {
                const result = "success";
                res.send({ "data": result });
            }
            else
            {
                const result = {
                    message: "发送验证码出错了"
                };
                res.send({ "error": result });
            }
        }
    },

    "/v1/user/login": {
        POST: (req, res) => {

            const result = {
                "id": 1,
                "account": "yangxuejie",
                "img_url": "http://p1.bpimg.com/573251/31ee2adcba8dbb2d.png",
                "danmaku_token": "26eb313220f53856584c1d92f743c56cfe6a73af2f06e514940ebd64a4b3b69a",
                "name": "杨学姐",
                "gender": 2
            }
            res.send({ "data": result });
        }
    },

    "/v1/user/register": {
        POST: (req, res) => {
            if (req.body.nickname)
            {
                const result = "success";
                res.send({ "data": result });
            }
            else
            {
                const result = {
                    message: "发送验证码出错了"
                };
                res.send({ "error": result });
            }
        }
    },

    "/v1/user/resetPassword": {
        POST: (req, res) => {
            if (req.body.new_password)
            {
                const result = "success";
                res.send({ "data": result });
            }
            else
            {
                const result = {
                    message: "重置失败"
                };
                res.send({ "error": result });
            }
        }
    }
}

module.exports = data;
