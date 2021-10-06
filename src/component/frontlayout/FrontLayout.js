import React from "react";
import { Route } from "react-router-dom";
import FrontHeaderBar from "./FrontHeaderBar";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Sider, Content } = Layout;

const FrontLayout = ({ children }) => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <FrontHeaderBar />
        <Content style={{ padding: "10px 50px" }}>{children}</Content>
      </Layout>
    </>
  );
};

const FrontLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <FrontLayout>
          <Component {...matchProps} />
        </FrontLayout>
      )}
    />
  );
};

export default FrontLayoutRoute;
