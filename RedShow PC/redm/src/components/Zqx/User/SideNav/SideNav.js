import React, { Component } from 'react';
import style from './SideNav.module.css'     //引入局部css
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;

class SideNav extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
      openKeys: ['sub1'],
    };
  
    onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
      }
    };
  
    render() {
      return (
        <Menu className={style.userside}
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>信息管理</span>
              </span>
            }
          >
            <Menu.Item key="1">个人信息</Menu.Item>
            <Menu.Item key="2">修改信息</Menu.Item>
            <Menu.Item key="3">修改密码</Menu.Item>
            {/* <Menu.Item key="4">Option 4</Menu.Item> */}
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>作品管理</span>
              </span>
            }
          >
            <Menu.Item key="5"><Link to="/ucenter/addgood">添加作品</Link></Menu.Item>
            <Menu.Item key="6">管理作品</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      );
    }
}

export default SideNav;