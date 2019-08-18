import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import style from  './AAside.module.css'

const { SubMenu } = Menu;

class AAside extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4'];

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
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }} 
        className={style.asidebox}
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
          <Menu.Item key="1">个人信息 </Menu.Item>
          <Menu.Item key="2">修改信息</Menu.Item>
          <Menu.Item key="3">修改密码</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span><Link to="/acenter/managingusers">管理用户</Link></span>
            </span>
          }
        >
  
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="setting" />
              <span><Link to="/acenter/">作品管理</Link></span>
            </span>
          }
        >
          <Menu.Item key="4"><Link to="/acenter/checkworks">管理作品</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/acenter/delworks">删除作品</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>系统管理</span>
            </span>
          }
        >
          <Menu.Item key="6"><Link to="/acenter/managenews">新闻管理</Link></Menu.Item>
          <Menu.Item key="7"><Link to="/acenter/addnews">添加新闻</Link></Menu.Item>
          <Menu.Item key="8"><Link to="/acenter/reviews">评论管理</Link></Menu.Item>

        </SubMenu>
      </Menu>
    );
  }
}

export default AAside;
