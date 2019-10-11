/* eslint-disable arrow-body-style */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { Item, SubMenu } = Menu;


const SiderMenu = (props) => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Item key="1">
        <Icon type="user" />
        <span><Link to="/1">nav 1</Link></span>
      </Item>
      <Item key="2">
        <Icon type="video-camera" />
        <span><Link to="/2">nav 2</Link></span>
      </Item>
      <Item key="3">
        <Icon type="upload" />
        <span><Link to="/3">nav 3</Link></span>
      </Item>
      <SubMenu
        key="sub1"
        title={(
          <span>
            <Icon type="user" />
            <span>User</span>
          </span>
)}
      >
        <Item key="4">Tom</Item>
        <Item key="5">Bill</Item>
        <Item key="6">Alex</Item>
      </SubMenu>
    </Menu>
  );
};

export default memo(SiderMenu);
