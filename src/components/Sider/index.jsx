import React, { memo } from 'react';
import { Layout, Menu, Icon } from 'antd';

import SiderMenu from './SiderMenu';

const { Sider } = Layout;


const SiderContainer = (props) => {
  const { visible } = props;
  return (
    <Sider
      width={250}
      trigger={null}
      collapsible
      collapsed={visible}
    >
      <div className="logo" />
      <SiderMenu />
    </Sider>
  );
};

export default memo(SiderContainer);
