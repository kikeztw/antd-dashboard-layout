import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export default () => (
  <div className="sing-in-form-header">
    <img src={require('../../assest/images/antLogo.svg')} alt="logo" className="form-header-logo" />
    <Title level={4}>Antd Layout DashBoard</Title>
  </div>
);
