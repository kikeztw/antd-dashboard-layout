/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Layout, Row, Col } from 'antd';

import { SignUpForm, SignUpHeader } from '../../components/SignUp';

const { Content, Footer } = Layout;


export default () => (
  <Layout>
    <Content>
      <div className="auth-background-images">
        <Row type="flex" justify="center">
          <Col xs={22} sm={22} md={5}>
            <div className="auth-form-container">
              <SignUpHeader />
            </div>
            <SignUpForm />
          </Col>
        </Row>
      </div>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);
