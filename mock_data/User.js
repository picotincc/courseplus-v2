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
    }
}

module.exports = data;
