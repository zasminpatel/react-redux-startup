import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, Route, withRouter, hashHistory } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import PropTypes from "prop-types";
const { Header, Sider, Content } = Layout;
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: false
  };
  static propTypes = {
    location: PropTypes.object.isRequired
  };
  state = {
    collapsed: false
  };

  render() {
    debugger;
    const { location } = this.props.children.props.match;
    const { collapsed } = this.state;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">Login</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/admin/dashboard"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/admin/dashboard" icon={<UserOutlined />}>
            <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/setting" icon={<VideoCameraOutlined />}>
            <NavLink to={"/admin/setting"}>Setting</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/addressbooks" icon={<UploadOutlined />}>
            <NavLink to={"/admin/addressbooks"}>AddressBooks</NavLink>
          </Menu.Item>
          <Menu.Item key="admin/addressbook/2" icon={<UploadOutlined />}>
            <NavLink to={"/admin/addressbook/2"}>Edit Address</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/mmaster" icon={<UploadOutlined />}>
            <NavLink to={"/admin/mmaster"}>Master</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/mmasters" icon={<UploadOutlined />}>
            <NavLink to={"/admin/mmasters"}>Masters</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideMenu);
