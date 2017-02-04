import React, { Component } from 'react';

import "base/resource/not-found.less";

export default class NotFoundContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick()
    {
        location.href = "/";
    }

    render()
    {
        return (
            <div className="cp-notfound-container">
                <div className="home" onClick={this.handleClick}>
                    <span className="icon iconfont icon-home"></span>
                    <span className="text">返回首页</span>
                </div>
            </div>
        );
    }
}
