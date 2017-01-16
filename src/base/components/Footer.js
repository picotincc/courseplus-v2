import React, { Component } from 'react';
import { Popover } from 'antd';

export default class Footer extends Component {

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
        const content = (
            <img src="/imgs/gongzhonghao.png"/>
        );

        return (
            <div className="cp-footer">
                <div className="left">
                    <img src="/imgs/white-logo.png"/>
                    <div className="copyright">
                        Copyright@2016-2017&nbsp;&nbsp;一可米互联网科技公司<br/>
                        苏ICP备15062280号
                    </div>
                </div>
                <div className="right">
                    <div className="about">
                        <span>关于我们</span>
                        <span>常见问题</span>
                        <span>意见反馈</span>
                        <span>关注我们</span>
                    </div>
                    <Popover content={content}>
                        <img src="/imgs/weixin.png" className="weixin" />
                    </Popover>
                </div>
            </div>
        );
    }
}
