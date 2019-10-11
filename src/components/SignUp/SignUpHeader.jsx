import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export default () => (
  <div className="form-header sing-up-header">
    <img src={require('../../assest/images/antLogo.svg')} alt="logo" className="form-header-logo" />
    <Title level={4}>Create a account</Title>
  </div>
);
