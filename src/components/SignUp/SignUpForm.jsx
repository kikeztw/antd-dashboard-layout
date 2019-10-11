import React, { PureComponent } from 'react';
import {
  Form, Icon, Input, Button, Typography,
} from 'antd';

const { Text } = Typography;

class SignInForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
    const { validateFields } = form;
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit} className="auth-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Create a username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Create a password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Text type="secondary">By creating an account, you agree to the Terms of Service.</Text>
          <Button type="primary" htmlType="submit" className="auth-form-button" size="large">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    );
  }
}


export default Form.create()(SignInForm);
