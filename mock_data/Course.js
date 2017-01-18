'use strict';
const data = {
    "/v1/course/search": {
        GET: (req, res) => {
            if (req.query.offset)
            {
                const query = req.query;
                const result = {
                    "offset": query.offset,
                    "limit": 12,
                    "count": 120
                };
                let list = [];
                if(query.offset < 36)
                {
                    list = list.concat(tCourses, tCourses, tCourses);
                }
                else
                {
                    list = list.concat(tCourses, tCourses);
                }
                result.list = list;

                res.send({ "data": result });
            }
            else
            {
                res.send(searchData1);
            }
        }

    }
}

const courses = [
    {
      "id": 1,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "王学长",
        "img_url": "http://p1.bpimg.com/567571/1fa420592aa98a91.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016级环境学院研究生"
      },
      "major": {
        "id": 1,
        "code": "020204",
        "name": "金融学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    },
    {
      "id": 2,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "法律学",
          "img_url": "http://p1.bpimg.com/573251/1b82aa98a2f56d99.png"
      },
      "teacher": {
        "id": 1,
        "name": "杨亚男",
        "img_url": "http://p1.bpimg.com/573251/31ee2adcba8dbb2d.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016级法律学硕士"
      },
      "major": {
        "id": 1,
        "code": "020204",
        "name": "法律学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 200
    },
    {
      "id": 3,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "胡学姐",
        "img_url": "http://p1.bpimg.com/573251/11482749d3915550.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "新闻传播学院"
      },
      "major": {
        "id": 1,
        "code": "045234",
        "name": "新闻传播专业",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    },
    {
      "id": 4,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "黄学姐",
        "img_url": "http://p1.bpimg.com/573251/1ec90efeb13f56e4.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第一",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016社会学院"
      },
      "major": {
        "id": 1,
        "code": "071314",
        "name": "社会学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    },
    {
      "id": 5,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "王学长",
        "img_url": "http://p1.bpimg.com/567571/1fa420592aa98a91.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016级环境学院研究生"
      },
      "major": {
        "id": 1,
        "code": "020204",
        "name": "金融学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    },
    {
      "id": 6,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "法律学",
          "img_url": "http://p1.bpimg.com/573251/1b82aa98a2f56d99.png"
      },
      "teacher": {
        "id": 1,
        "name": "杨亚男",
        "img_url": "http://p1.bpimg.com/573251/31ee2adcba8dbb2d.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016级法律学硕士"
      },
      "major": {
        "id": 1,
        "code": "020204",
        "name": "法律学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 200
    },
    {
      "id": 7,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "胡学姐",
        "img_url": "http://p1.bpimg.com/573251/11482749d3915550.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "新闻传播学院"
      },
      "major": {
        "id": 1,
        "code": "045234",
        "name": "新闻传播专业",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    },
    {
      "id": 8,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "黄学姐",
        "img_url": "http://p1.bpimg.com/573251/1ec90efeb13f56e4.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第一",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016社会学院"
      },
      "major": {
        "id": 1,
        "code": "071314",
        "name": "社会学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    }
];

const tCourses = [
    {
      "id": 1,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "王学长",
        "img_url": "http://p1.bpimg.com/567571/1fa420592aa98a91.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016级环境学院研究生"
      },
      "major": {
        "id": 1,
        "code": "020204",
        "name": "金融学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    },
    {
      "id": 2,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "法律学",
          "img_url": "http://p1.bpimg.com/573251/1b82aa98a2f56d99.png"
      },
      "teacher": {
        "id": 1,
        "name": "杨亚男",
        "img_url": "http://p1.bpimg.com/573251/31ee2adcba8dbb2d.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016级法律学硕士"
      },
      "major": {
        "id": 1,
        "code": "020204",
        "name": "法律学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 200
    },
    {
      "id": 3,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "胡学姐",
        "img_url": "http://p1.bpimg.com/573251/11482749d3915550.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第二",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "新闻传播学院"
      },
      "major": {
        "id": 1,
        "code": "045234",
        "name": "新闻传播专业",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    },
    {
      "id": 4,
      "subject": {
          "id": 1,
          "code": 919,
          "name": "经济学原理",
          "img_url": "http://p1.bpimg.com/567571/4015a9e4d584dc67.png"
      },
      "teacher": {
        "id": 1,
        "name": "黄学姐",
        "img_url": "http://p1.bpimg.com/573251/1ec90efeb13f56e4.png",
        "account": "string",
        "gender": 1,
        "introduction": "2016年专业第一",
        "description": "专业课110+ 数学130+ 英语80+ 政治70+",
        "education": "南京大学2016社会学院"
      },
      "major": {
        "id": 1,
        "code": "071314",
        "name": "社会学",
        "school": {
          "id": 1,
          "name": "南京大学",
          "img_url": "string"
        },
        "category": {
          "id": 0,
          "code": "string",
          "name": "string"
        }
      },
      "code": "string",
      "star": 4,
      "buyer_num": 20
    }
];

const searchData1 = {"data": {
    "offset": 0,
    "limit": 12,
    "count": 120,
    "list": courses
}};





module.exports = data;
