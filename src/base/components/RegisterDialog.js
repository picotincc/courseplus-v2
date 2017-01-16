import React, {Component, PropTypes} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

export default class RegisterDialog extends Component {
    render() {
        return (
            <div className="register-dialog">
                <div className="logo">
                    <img src="/imgs/logo.png" />
                </div>
            </div>
        );
    }
}