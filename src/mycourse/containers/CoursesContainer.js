import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormatUtil from 'base/util/FormatUtil';
import MyCourse from '../components/MyCourse';

class CoursesContainer extends Component {

    constructor (props) {
        super(props);
        this.handleListItemClick = this.handleListItemClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    handleListItemClick(id){
        FormatUtil.openNewTab("/course/"+id);
    }

    handleTagClick(schoolId, majorId){
        FormatUtil.openNewTab("/search/"+schoolId+"/"+majorId);
    }

    render()
    {
        var courses = [
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

        return(
            <div className="cp-courses-container">
                {
                    // (this.state.goodCourses === null ) ? (
                    //     <Icon type="loading" />
                    // ) : (
                        <ul className="courses-list">
                            {/* {this.state.goodCourses.list.map((item,index) => { */}
                            {courses.map((item,index) => {
                                return (
                                    <MyCourse key={item.id} data={item} listItemClick={this.handleListItemClick} tagClick={this.handleTagClick} />
                                );
                            })}
                        </ul>
                    // )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(CoursesContainer);
