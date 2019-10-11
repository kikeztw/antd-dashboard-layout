import React from 'react';
import { Layout, Row, Col } from 'antd';

import { SingInHeader, SignInForm } from '../../components/SIgnIn';

const { Content, Footer } = Layout;


export default () => (
  <Layout>
    <Content>
      <div className="sign-background-images">
        <Row type="flex" justify="center">
          <Col xs={22} sm={22} md={5}>
            <div className="sign-in-form-container">
              <SingInHeader />
            </div>
            <SignInForm />
          </Col>
        </Row>
      </div>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);
