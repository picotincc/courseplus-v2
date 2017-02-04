import React, { Component } from 'react';
import {Button} from 'antd';

import FormatUtil from '../../base/util/FormatUtil';

class BuyCourseDialog extends Component {

    constructor (props) {
        super(props);
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

    render()
    {
        const {course, cancelClickHandler, onClickHandler} = this.props;
        const chineseNum = FormatUtil.NumberToChinese(course.number);

        return(
            <div className="buycourse-dialog">
                <div className="title">
                    购买单节课时
                </div>
                <div className="course-name">
                    第{chineseNum}课时&nbsp;&nbsp;{course.name}
                    <span className="course-price">¥{course.price}</span>
                </div>
                <div className="course-hint">
                    <p>付费资料免费送～买断课程更划算！最高可省200元～</p>
                    <p>买断首节课时不满意，全额退款 <a className="buyout">点击查看>></a></p>
                </div>

                <div className="button-area">
                    <Button className="button" onClick = {cancelClickHandler}>暂不支付</Button>
                    <Button type="primary" className="button" onClick = {onClickHandler}>确认支付</Button>
                </div>
            </div>
        )
    }
}

export default BuyCourseDialog
