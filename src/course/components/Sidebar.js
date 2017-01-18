import React, { Component } from 'react';
import { Affix, Icon } from 'antd';

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
        const { curClass, course, buyClickHandler} = this.props;
        return(
            (course.length == 0) ? (
                <Icon type="loading" />
            ) : (
                <div className={"cp-course-sidebar " + curClass}>
                    <img src={course.teacher.img_url} />
                    <div className="name">{course.teacher.name}</div>
                    <div className="desc">{course.teacher.education}</div>
                    <div className="honour">{course.teacher.introduction}</div>
                    <div className="label">{course.teacher.description}</div>
                    <div className="question-btn">向他提问</div>
                    <div className="buy-btn" onClick={buyClickHandler}>
                        <div className="text">买断课程</div>
                        <div className="price">
                            <span className="origin">¥{course.origin_price}</span>&nbsp;<span className="current">¥{course.currentPrice}</span>
                        </div>
                    </div>

                  
                </div>
            )
        )
    }
}
