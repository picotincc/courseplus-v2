import React, { Component } from 'react';
import { Link } from 'react-router';

import { Menu, Dropdown, Icon } from 'antd';

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
        const { onLoginClick, onRegisterClick, userInfo } = this.props;
        let userShow = null;
        if (userInfo)
        {
            userShow = (
                <div className="user-info">
                    <span className="mycourse">我的考研课程</span>
                    <img src={userInfo.img_url} />
                    <div className="user-dropdown">
                        <i className="triangle"></i>
                        <ul ref="user-dropdown" className="user-menu">
                            <li>
                                <div className="item">
                                    <Link href="/order">我的订单</Link>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <Link href="/user">个人设置</Link>
                                </div>
                            </li>
                            <li><div className="line" ></div></li>
                            <li>
                                <div className="item logout">
                                    <span>退出登录</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            );
        }
        else
        {
            userShow = (
                <div className="btn-groups">
                    <div className="login-btn" onClick={onLoginClick}>
                        <span>登录</span>
                    </div>
                    <div className="register-btn" onClick={onRegisterClick}>
                        <span>注册</span>
                    </div>
                </div>
            );
        }
        return (
            <div className="cp-header">
                <div className="logo">
                    <Link href="/">
                        <img src="/imgs/logo.png" />
                    </Link>
                </div>
                {userShow}
            </div>
        );
    }
}
