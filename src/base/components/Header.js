import React, { Component } from 'react';

export default class Header extends Component {

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
        const {handleLoginClick} = this.props;
        return (
            <div className="cp-header">
                <div className="logo">
                    <img src="/imgs/logo.png" />
                </div>
                <div className="login-btn" onClick={handleLoginClick}>
                    <span>登录</span>
                </div>
                <div className="register-btn">
                    <span>注册</span>
                </div>
            </div>
        );
    }
}
