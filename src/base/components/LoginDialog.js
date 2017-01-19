import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

import FormatUtil from 'base/util/FormatUtil';
import UserService from 'base/service/UserService';
import WebStorageUtil from 'base/util/WebStorageUtil';


class LoginDialog extends Component {

    constructor(props)
    {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        errorMessage: ""
    }

    handleSubmit(values)
    {
        const isRemember = values.remember;
        const paras = {
            account: values.phone,
            password: values.password
        };
        UserService.login(paras).then(res => {
            if (isRemember)
            {
                WebStorageUtil.setUserStorage(paras);
            }
            this.props.updateUserInfo(res);
            setTimeout(() => {
                this.props.hideLoginModal();
            }, 500)
        }).catch(err => {
            this.handleError(err);
        });
    }

    cleanError()
    {
        this.setState({
            errorMessage: ""
        })
    }

    handleError(error)
    {
        this.setState({
            errorMessage: error.message
        });
    }

    render() {
        const { onForgetPasswordClick, onRegisterClick } = this.props;
        let errorMessage = null;
        if (this.state.errorMessage !== "")
        {
            errorMessage = (
                <div>
                    <span className="icon iconfont icon-close"></span>
                    <span className="message">{this.state.errorMessage}</span>
                </div>
            );
        }

        return (
            <div className="login-dialog">
                <div className="logo">
                    <img src="/imgs/logo.png" />
                </div>
                <div className="error">
                    {errorMessage}
                </div>
                <LoginForm
                    className="login-form"
                    forgetPasswordHandler={onForgetPasswordClick}
                    onSubmit={this.handleSubmit}
                />
                <div className="seperate-line"> </div>
                <div className="register-row">
                    <span className="tip"> 还没有course+账户？ </span>
                    <a className="register-button" onClick={onRegisterClick}>注册</a>
                </div>
            </div>
        );
    }
}

const LoginForm = Form.create()(React.createClass({

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err)
            {
                this.props.onSubmit(values);
            }
        });
    },

    checkPhone(rule, value, callback)
    {
        const form = this.props.form;
        if (FormatUtil.isPhoneNumber(value))
        {
            callback();
        } else {
            callback('请输入正确格式的手机号');
        }
    },

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [
                            { required: true, message: '请输入手机号！' },
                            {
                                validator: this.checkPhone
                            }
                        ],
                    })(
                        <Input addonBefore={<Icon type="mobile" />} placeholder="手机号" />
                    )}
                </FormItem>
                <FormItem className="password-row">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem className="remember-row">
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className="login-form-forgot" onClick={this.props.forgetPasswordHandler}>忘记密码？</a>

                </FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
            </Form>
        );
    },
}));

export default LoginDialog;
