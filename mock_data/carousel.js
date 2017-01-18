const data = {
    "/v1/carousel": {
        GET: (req, res) => {
            res.send({
                "data": [
                    {
                        "id": 1,
                        "img_url": "http://ojnq0puar.bkt.clouddn.com/banner.png",
                        "link_url": "http://www.baidu.com",
                        "priority": 0,
                        "state": "UNACTIVE"
                    },
                    {
                        "id": 2,
                        "img_url": "http://ojnq0puar.bkt.clouddn.com/banner.png",
                        "link_url": "http://www.jd.com",
                        "priority": 1,
                        "state": "UNACTIVE"
                    }
                ]
            });
        }
    }
}

module.exports = data;