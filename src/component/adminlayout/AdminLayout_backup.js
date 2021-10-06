import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import PropTypes from "prop-types";
import SideMenu from "component/adminlayout/SideMenu";
import "antd/dist/antd.css";
import "./AdminLayout.css";
const { Header, Sider, Content } = Layout;

class AdminLayout extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { location } = this.props.children.props.match;
    const { collapsed } = this.state;
    return (
      <Layout>
        {/* <SideMenu /> */}
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
const AdminLayout1 = ({ children, ...rest }) => {
  return (
    <div className="page page-dashboard">
      <div className="sidebar">This is the Second Layout</div>
      <div className="main">{children}</div>
    </div>
  );
};

const AdminLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <AdminLayout>
          <Component match={matchProps} />
        </AdminLayout>
      )}
    />
  );
};
export default withRouter(AdminLayoutRoute);
