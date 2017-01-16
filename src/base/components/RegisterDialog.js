import React, {Component, PropTypes} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;

export default class RegisterDialog extends Component {
    render() {
        console.log(this.props.handleLoginClick);
        return (
            <div className="register-dialog">
                <div className="logo">
                    <img src="/imgs/logo.png" />
                </div>
                <RegistrationForm />
                <div className="seperate-line"> </div>
                <div className="login-row"> 
                    <span className="tip"> 已有course+账户？ </span>
                    <a className="login-button" onClick={this.props.handleLoginClick} >登录</a>
                </div>
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
        console.log('Received values of form: ', values);
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
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="register-form" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入手机号！' }],
          })(
            <Input addonBefore={<Icon type="mobile" />} placeholder="手机号" />
          )}
        </FormItem>

        <FormItem>
          <Row gutter={8}>
            <Col span={15}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入验证码!' }],
              })(
            <Input size="large" addonBefore={<Icon type="lock" />}  placeholder="请输入验证码" />
          )}
            </Col>
            <Col span={9}>
              <Button className="comfirm-button" size="large">发送验证码</Button>
            </Col>
          </Row>
        </FormItem>
       
        <FormItem>
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入昵称！' }],
          })(
            <Input addonBefore={<Icon type="lock" />} placeholder="昵称" />
          )}
        </FormItem>
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
          <Button type="primary" htmlType="submit"  className="register-form-button">注册</Button>
        </FormItem>

      </Form>
    );
  },
}));