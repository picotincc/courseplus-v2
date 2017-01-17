import React, {Component, PropTypes} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginDialog extends Component {
    render() {
        return (
            <div className="login-dialog">
                <div className="logo">
                    <img src="/imgs/logo.png" />
                </div>
                <LoginForm forgetPasswordHandler={this.props.handleForgetPasswordClick} className="login-form"/>
                <div className="seperate-line"> </div>
                <div className="register-row"> 
                    <span className="tip"> 还没有course+账户？ </span>
                    <a className="register-button" onClick={this.props.handleRegisterClick}>注册</a>

                </div>
            </div>
        );
    }
}

const LoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入手机号！' }],
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