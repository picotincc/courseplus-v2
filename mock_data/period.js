const data = {
    "/v1/course/period": {
        GET: {
            "data": [
                {
                    "id": 0,
                    "course_id": 1,
                    "name": "课程导览",
                    "price": 0
                }, {
                    "id": 1,
                    "course_id": 1,
                    "name": "环境化学专业课复习建议策略",
                    "date": "2016-10-01",
                    "price": 10,
                    "is_buy": 0
                }, {
                    "id": 2,
                    "course_id": 1,
                    "name": "水环境化学重点知识点提炼",
                    "date": "2016-10-03",
                    "price": 20,
                    "is_buy": 1
                }, {
                    "id": 3,
                    "course_id": 1,
                    "name": "大气环境化学重点知识点提炼",
                    "date": "2016-10-05",
                    "price": 30,
                    "is_buy": 0
                }, {
                    "id": 4,
                    "course_id": 1,
                    "name": "土壤环境化学重点知识点提炼",
                    "date": "2016-10-07",
                    "price": 40,
                    "is_buy": 1
                }, {
                    "id": 5,
                    "course_id": 1,
                    "name": "生物效应知识点提炼以及答题技巧",
                    "date": "2016-10-09",
                    "price": 50,
                    "is_buy": 0
                }, {
                    "id": 6,
                    "course_id": 1,
                    "name": "课程答疑",
                    "date": "2017-01-11",
                    "price": 60,
                    "is_buy": 1
                }
            ]
        }
    },
    "/v1/course/periodDetail": {
        GET: (req, res) => {
            var id = req.query.id;
            if (id==="0") {    // 先导视频
                res.send({
                    "data": {
                        "live": {
                            "id": 0,
                            "start_time": "string",
                            "state": "string",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }else if (id==="1") {   //已直播，未购买
                res.send({
                    "data": {
                        "live": {
                            "id": 1,
                            "start_time": "string",
                            "state": "CODED",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }else if (id==="2") {   //已直播，已购买
                res.send({
                    "data": {
                        "live": {
                            "id": 2,
                            "start_time": "string",
                            "state": "CODED",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }else if (id==="3") {   //正在直播，未购买
                res.send({
                    "data": {
                        "live": {
                            "id": 3,
                            "start_time": "string",
                            "state": "ING",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }else if (id==="4") {   //正在直播，已购买
                res.send({
                    "data": {
                        "live": {
                            "id": 4,
                            "start_time": "string",
                            "state": "ING",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }else if (id==="5") {   //未直播，未购买
                res.send({
                    "data": {
                        "live": {
                            "id": 5,
                            "start_time": "string",
                            "state": "BEFORE",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }else if (id==="6") {   //未直播，已购买
                res.send({
                    "data": {
                        "live": {
                            "id": 6,
                            "start_time": "string",
                            "state": "BEFORE",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }else{
                res.send({
                    "data": {
                        "live": {
                            "id": 100,
                            "start_time": "string",
                            "state": "string",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": ""
                    }
                })
            }
        }
    }
}

module.exports = data;
