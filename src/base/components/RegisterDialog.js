import React, { Component } from 'react';
import { Form, Input, Icon, Row, Col, Button, message } from 'antd';
const FormItem = Form.Item;

import FormatUtil from 'base/util/FormatUtil';
import UserService from 'base/service/UserService';
import VerifyCode from './VerifyCode';

export default class RegisterDialog extends Component {

    constructor(props)
    {
        super(props);

        this.handleCodeSend = this.handleCodeSend.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static defaultProps = {
        isRegister : true
    }

    state = {
        errorMessage: ""
    }

    componentDidMount()
    {

    }

    handleCodeSend(phone)
    {
        const usePage = this.props.isRegister ? 0 : 1;
        return new Promise((resolve, reject) => {
            if (FormatUtil.isPhoneNumber(phone))
            {
                UserService.sendVerifyCode({ phone, usePage }).then(res => {
                    this.cleanError();
                    resolve(true);
                }).catch(err => {
                    this.handleError(err);
                    resolve(false);
                });
            }
            else
            {
                this.handleError({ message: "手机号格式不正确" })
                resolve(false);
            }
        });
    }

    handleSubmit(values)
    {
        if (this.props.isRegister)
        {
            this.register(values);
        }
        else
        {
            this.reset(values);
        }
    }

    register(values)
    {
        const paras = {
            account: values.phone,
            password: values.password,
            verifyCode: values.code,
            nickname: values.nickname
        };
        UserService.register(paras).then(res => {
            message.success("注册成功，稍后跳转", 2);
            setTimeout(() => {
                this.props.onLoginClick();
            }, 2000);
        }).catch(err => {
            this.handleError(err);
        });
    }

    reset(values)
    {
        const paras = {
            account: values.phone,
            newPassword: values.password,
            verifyCode: values.code
        };
        UserService.resetPassword(paras).then(res => {
            message.success("重置成功，稍后跳转", 2);
            setTimeout(() => {
                this.props.onLoginClick();
            }, 2000);
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
        const { isRegister, onLoginClick } = this.props;
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
            <div className="register-dialog">
                <div className="logo">
                    <img src="/imgs/logo.png" />
                </div>
                <div className="error">
                    {errorMessage}
                </div>
                <RegistrationForm
                    isRegister={isRegister}
                    onCodeSend={this.handleCodeSend}
                    onSubmit={this.handleSubmit}
                />
                {
                    (isRegister) ? (
                        <div className="bottom-part">
                            <div className="seperate-line"> </div>
                            <div className="login-row">
                                <span className="tip"> 已有course+账户？ </span>
                                <a className="login-button" onClick={onLoginClick} >登录</a>
                            </div>
                        </div>
                    ) : (
                        <div className="bottom-part" />
                    )
                }
            </div>
        );
    }
}


const RegistrationForm = Form.create()(React.createClass({

    getInitialState() {
        return {
            passwordDirty: false,
        };
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    },

    checkPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一致!');
        } else {
            callback();
        }
    },

    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.passwordDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
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

    handleCodeSend()
    {
        const form = this.props.form;
        const phone = form.getFieldValue('phone');
        return this.props.onCodeSend(phone);
    },

    render() {
        const { getFieldDecorator } = this.props.form;
        const { isRegister } = this.props;

        return (
            <Form className="register-form" onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [
                            { required: true, message: '请输入手机号！' },
                            {
                                validator: this.checkPhone,
                            }
                        ],
                        })(
                        <Input addonBefore={<Icon type="mobile" />} placeholder="手机号" />
                    )}
                </FormItem>

                <FormItem>
                    <Row gutter={8}>
                        <Col span={15}>
                            {getFieldDecorator('code', {
                                rules: [
                                    { required: true, message: '请输入验证码!' }
                                ],
                            })(
                                <Input size="large" addonBefore={<Icon type="exclamation-circle-o" />}  placeholder="请输入验证码" />
                            )}
                        </Col>
                        <Col span={9}>
                            <VerifyCode onCodeSend={this.handleCodeSend} size="large"></VerifyCode>
                        </Col>
                    </Row>
                </FormItem>

                {
                (isRegister) ? (
                <FormItem>
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: '请输入昵称！' }],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="昵称" />
                    )}
                </FormItem>):(<span />)
                }

                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码!',
                        }, {
                            validator: this.checkConfirm,
                        }],
                        })(
                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '请输入确认密码!',
                        }, {
                            validator: this.checkPassword,
                        }],
                        })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="确认密码" />
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit"  className="register-form-button">{isRegister ? "注册" : "修改密码"}</Button>
                </FormItem>

            </Form>
        );
    }
}));
