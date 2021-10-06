import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import SideMenu from "component/adminlayout/SideMenu";
import "antd/dist/antd.css";
import "./AdminLayout.css";

// https://codesandbox.io/embed/4r16r1oxj4
// https://www.freecodecamp.org/news/react-changing-state-of-child-component-from-parent-8ab547436271/
//https://github.com/dunizb/CodeTest/blob/e2dbbc1375dec25012acd50d41c3e82d35611a2d/React/antd-creat-ms/src/components/NavLeft/index.js
//https://github.com/dunizb/CodeTest/blob/e2dbbc1375dec25012acd50d41c3e82d35611a2d/React/antd-creat-ms/src/config/menuConfig.js
const { Header, Sider, Content } = Layout;

class AdminLayout extends React.Component {
  constructor(props) {
    super(props);
    const defaultCollapsed = localStorage.getItem("mid") || false;
    this.state = {
      collapsed: defaultCollapsed
    };
  }
  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed }, () => {
      localStorage.setItem("mid", this.state.collapsed);
    });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu collapsed={this.state.collapsed} />
        {/* <Sider trigger={null} collapsible collapsed={collapsed}>
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
        </Sider> */}
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
