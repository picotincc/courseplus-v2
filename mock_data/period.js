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
                    "price": 0,
                    "is_buy": 0
                }, {
                    "id": 2,
                    "course_id": 1,
                    "name": "水环境化学重点知识点提炼",
                    "date": "2016-10-03",
                    "price": 0,
                    "is_buy": 0
                }, {
                    "id": 3,
                    "course_id": 1,
                    "name": "大气环境化学重点知识点提炼",
                    "date": "2016-10-05",
                    "price": 0,
                    "is_buy": 1
                }, {
                    "id": 4,
                    "course_id": 1,
                    "name": "土壤环境化学重点知识点提炼",
                    "date": "2016-10-07",
                    "price": 0,
                    "is_buy": 1
                }, {
                    "id": 5,
                    "course_id": 1,
                    "name": "生物效应知识点提炼以及答题技巧",
                    "date": "2016-10-09",
                    "price": 0,
                    "is_buy": 1
                }, {
                    "id": 6,
                    "course_id": 1,
                    "name": "课程答疑",
                    "date": "2017-01-11",
                    "price": 0,
                    "is_buy": 0
                }
            ]
        }
    },
    "/v1/course/periodDetail": {
        GET: (req, res) => {
            var id = req.query.id;
            if (id==="1") {
                res.send({
                    "data": {
                        "live": {
                            "id": 1,
                            "start_time": "string",
                            "state": "string",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": "string"
                    }
                })
            }else if (id==="2") {
                res.send({
                    "data": {
                        "live": {
                            "id": 2,
                            "start_time": "string",
                            "state": "string",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": "string"
                    }
                })
            }else if (id==="3") {
                res.send({
                    "data": {
                        "live": {
                            "id": 3,
                            "start_time": "string",
                            "state": "string",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": "string"
                    }
                })
            }else if (id==="4") {
                res.send({
                    "data": {
                        "live": {
                            "id": 4,
                            "start_time": "string",
                            "state": "string",
                            "preview_url": "string",
                            "complete_url": "string",
                            "live_url": "string"
                          },
                          "content": "string"
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
                          "content": "string"
                    }
                })
            }
        }
    }
}

module.exports = data;
