import React, { Component } from 'react';
import { Rate } from 'antd';

export default class Comment extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="cp-course-comment">
                <div className="user">
                    <i className="icon"></i>
                    <span className="name">浪奔</span>
                </div>
                <div className="comment">
                    <div className="text">化学狗被拯救了啊啊啊啊啊啊啊啊啊！！备考秘籍给我节省了好多时间化学狗被拯救了啊啊啊啊啊啊啊啊啊！！备考秘籍给我节省了好多时间化学狗被拯救了啊啊啊啊啊啊啊啊啊！！备考秘籍给我节省了好多时间化学狗被拯救了啊啊啊啊啊啊啊啊啊！！备考秘籍给我节省了好多时间</div>
                    <span className="review-more">查看更多</span>
                    <div className="infos">
                        <span className="time">2016-11-12 20:34:51</span>
                        <Rate disabled allowHalf defaultValue={4} />
                        <span className="resource">购买资料：环境化学专业课复习完整版</span>
                        <span className="reply">回复</span>
                    </div>
                    <div className="reply-part">
                        <textarea className="reply-input" placeholder="来说点什么吧"></textarea>
                        <span className="reply-btn">回复</span>
                    </div>
                    <ul className="reply-list">
                        <li>
                            <div className="reply-user">
                                <i className="reply-icon"></i>
                                <span className="reply-name">权利的伪娘</span>
                            </div>
                            <div className="reply-content">
                                <div className="reply-text">回复 <span className="reply-target">浪奔</span>：资料真的不错 希望你们加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油</div>
                                <div className="reply-infos">
                                    <span className="reply-time">2016-11-12 20:34:51</span>
                                    <div className="reply-operation">
                                        <span className="reply-delete">删除</span>
                                        <span className="reply-reply">回复</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="reply-user">
                                <i className="reply-icon"></i>
                                <span className="reply-name">浪奔</span>
                            </div>
                            <div className="reply-content">
                                <div className="reply-text">回复 <span className="reply-target">权利的伪娘</span>：资料真的不错 希望你们加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油</div>
                                <div className="reply-infos">
                                    <span className="reply-time">2016-11-12 20:34:51</span>
                                    <div className="reply-operation">
                                        <span className="reply-reply">回复</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="reply-more">查看更多回复</div>
                </div>
            </div>
        )
    }
}
