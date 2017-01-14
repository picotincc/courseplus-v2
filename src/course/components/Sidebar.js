import React, { Component } from 'react';
import { Affix } from 'antd';

export default class Sidebar extends Component {

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
        const { curClass } = this.props;
        return(
            <div className={"cp-course-sidebar " + curClass}>
                <img src="http://i1.piimg.com/567571/2f85c554e4ba8aeb.png" />
                <div className="name">徐伟</div>
                <div className="desc">南京大学2016级环境学院研究生</div>
                <div className="honour">专业课排名第一</div>
                <div className="label">总分380 外语76 政治65 数学112 专业课127</div>
                <div className="question-btn">向他提问</div>
                <div className="buy-btn">
                    <div className="text">买断课程</div>
                    <div className="price">
                        <span className="origin">¥350</span>&nbsp;<span className="current">¥270</span>
                    </div>
                </div>
            </div>
        )
    }
}
