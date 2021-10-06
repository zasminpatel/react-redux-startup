import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, Route, withRouter, hashHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MailOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;
class SideMenu extends React.Component {
  componentWillMount = () => {
    console.log("SideMenu - componentWillMount");
  };

  render() {
    const { location, collapsed } = this.props;
    // debugger;
    // let pathname = location.pathname.split("/");
    // let submenu = "";
    // if (pathname.length >= 4) {
    //   switch (pathname[3]) {
    //     case "mmaster":
    //     case "mmasters":
    //       submenu = "sub1";
    //       pathname = pathname.splice(-1).join();
    //       return "";

    //     default:
    //       return "";
    //   }
    //   console.log(pathname);
    // }
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">Login</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/admin/dashboard"]}
          selectedKeys={[location.pathname]}
          // defaultOpenKeys={[submenu]}
          // onClick={this.handleClick}
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
          <Menu.Item key="/admin/addressbook" icon={<UploadOutlined />}>
            <NavLink to={"/admin/addressbook"}>Edit Address</NavLink>
          </Menu.Item>
          {/* <Menu.Item key="/admin/mmaster" icon={<UploadOutlined />}>
            <NavLink to={"/admin/mmaster"}>Master</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/mmasters" icon={<UploadOutlined />}>
            <NavLink to={"/admin/mmasters"}>Masters</NavLink>
          </Menu.Item> */}
          <SubMenu key={["sub1"]} icon={<MailOutlined />} title="Master">
            <Menu.Item key="/admin/mmasters">
              <NavLink to={"/admin/mmasters"}>Masters</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/mmaster">
              <NavLink to={"/admin/mmaster"}>Add New</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideMenu);
