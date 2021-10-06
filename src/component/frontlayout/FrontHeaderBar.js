import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "actions/loginAction";
import { Menu, Row, Col, Layout } from "antd";
import {
  HomeOutlined,
  MailOutlined,
  BulbOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const FrontHeaderBar = () => {
  const { loggedin } = useSelector((state) => state.logins);
  const [current, setCurrent] = useState("home");
  const { Header } = Layout;
  const { SubMenu } = Menu;
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };
  const handleClick = (e) => {
    debugger;
    setCurrent(e.key);
  };
  return (
    // <Header className="header">
    //   <div className="logo" />
    //   <Menu
    //     theme="dark"
    //     mode="horizontal"
    //     defaultSelectedKeys={["11"]}
    //     style={{ lineHeight: "64px" }}
    //   >
    //     <Menu.Group>
    //       <Menu.Item key="10">nav 1</Menu.Item>
    //       <Menu.Item key="11">nav 2</Menu.Item>
    //       <Menu.Item key="12">nav 3</Menu.Item>
    //     </Menu.Group>
    //     <Menu.Group align="right">
    //       <Menu.Item key="20">Account</Menu.Item>
    //       <Menu.Item key="21">Logout</Menu.Item>
    //     </Menu.Group>
    //   </Menu>
    // </Header>
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <NavLink exact to={"/"}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="about" icon={<AppstoreOutlined />}>
        <NavLink exact to={"/about"}>
          About
        </NavLink>
      </Menu.Item>
      <Menu.Item key="counter" icon={<BulbOutlined />}>
        <NavLink exact to={"/counter"}>
          Counter
        </NavLink>
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      {loggedin === true ? (
        <>
          <Menu.Item key="admin">
            <NavLink to={"/admin"}>Admin</NavLink>
          </Menu.Item>
          <Menu.Item key="logout">
            <NavLink to={"/login"} onClick={logOut}>
              Logout
            </NavLink>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login">
          <NavLink exact to={"/login"}>
            Login
          </NavLink>
        </Menu.Item>
      )}
    </Menu>

    // <nav className="navbar navbar-expand navbar-dark bg-dark">
    //   <Link to={"/"} className="navbar-brand">
    //     jesKoder
    //   </Link>
    //   <div className="navbar-nav mr-auto">
    //     <li className="nav-item">
    //       <NavLink exact to={"/"} className="nav-link" activeClassName="active">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink to={"/about"} className="nav-link" activeClassName="active">
    //         About
    //       </NavLink>
    //     </li>
    //     {/* {isLoggedIn == false ? (
    //       <li className="nav-item">
    //         <NavLink
    //           to={"/login"}
    //           className="nav-link"
    //           activeClassName="active"
    //         >
    //           Login
    //         </NavLink>
    //       </li>
    //     ) : (
    //       <>
    //         <li className="nav-item">
    //           <NavLink
    //             to={"/admin"}
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Admin
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to={"/login"}
    //             className="nav-link"
    //             activeClassName="active"
    //             onClick={logOut}
    //           >
    //             Logout
    //           </NavLink>
    //         </li>
    //       </>
    //     )} */}
    //   </div>
    // </nav>
  );
};
export default FrontHeaderBar;
