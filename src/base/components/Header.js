import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Dropdown, Icon } from 'antd';

import WebStorageUtil from 'base/util/WebStorageUtil';


export default class Header extends Component {

    constructor (props) {
        super(props);

        this.showUserMenu = this.showUserMenu.bind(this);
        this.hideUserMenu = this.hideUserMenu.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    static defaultProps = {

    }

    componentDidMount()
    {
        document.body.addEventListener("mouseover", () => {
            this.hideUserMenu();
        });
    }

    showUserMenu()
    {
        this.refs["user-menu"].classList.add("show");
    }

    hideUserMenu()
    {
        if (this.props.userInfo)
        {
            this.refs["user-menu"].classList.remove("show");
        }
    }

    handleLogout()
    {
        this.props.updateUserInfo(null);
        //删除session,cookie
        WebStorageUtil.removeUserStorage();
    }

    render()
    {
        const { onLoginClick, onRegisterClick, userInfo } = this.props;
        let userShow = null;
        if (userInfo)
        {
            userShow = (
                <div className="user-info">
                    <Link className="mycourse" href="/myCourse">我的考研课程</Link>
                    <div className="img-wrapper" onMouseOver={this.showUserMenu}>
                        <img src={userInfo.img_url}   />
                    </div>
                    <div className="user-dropdown" ref="user-menu" onMouseOver={this.showUserMenu}>
                        <i className="triangle"></i>
                        <ul className="user-menu">
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
                                <div className="item logout" onClick={this.handleLogout}>
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
