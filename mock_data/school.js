const data = {
    "/v1/school": {
        GET: {
            "data": [
                {
                    id: 0,
                    name: "南京大学",
                    img_url: "http://p1.bqimg.com/573251/53b39b48c75d9ad3.png"
                },
                {
                    id: 1,
                    name: "北京大学",
                    img_url: "http://p1.bqimg.com/573251/47417bcea92bf6b4.png"
                },
                {
                    id: 2,
                    name: "东南大学",
                    img_url: "http://i1.piimg.com/573251/e488cc08cc340fa7.png"
                }
            ]
        }
    },

    "/v1/school/major": {
        GET: {
            "data":[
                {
                    "id": 0,
                    "code": "020204",
                    "name": "金融学",
                    "category": {
                        "id": 0,
                        "code": "02",
                        "name": "经济学"
                    }
                },
                {
                    "id": 1,
                    "code": "020205",
                    "name": "工商管理",
                    "category": {
                        "id": 0,
                        "code": "02",
                        "name": "经济学"
                    }
                },
                {
                    "id": 2,
                    "code": "020206",
                    "name": "微观经济学",
                    "category": {
                        "id": 0,
                        "code": "02",
                        "name": "经济学"
                    }
                },
                {
                    "id": 3,
                    "code": "081501",
                    "name": "水文及水资料",
                    "category": {
                        "id": 1,
                        "code": "08",
                        "name": "工学"
                    }
                },
                {
                    "id": 4,
                    "code": "082232",
                    "name": "环境科学",
                    "category": {
                        "id": 1,
                        "code": "08",
                        "name": "工学"
                    }
                },
                {
                    "id": 5,
                    "code": "082678",
                    "name": "环境工程（专业硕士）",
                    "category": {
                        "id": 1,
                        "code": "08",
                        "name": "工学"
                    }
                },
                {
                    "id": 6,
                    "code": "085212",
                    "name": "软件工程",
                    "category": {
                        "id": 1,
                        "code": "08",
                        "name": "工学"
                    }
                }
            ]
        }
    }
}

module.exports = data;
