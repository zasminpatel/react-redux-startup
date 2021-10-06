import React, { Component } from "react";
import { Route } from "react-router-dom";
const BackLayout = ({ children, ...rest }) => {
  return (
    <div className="page page-dashboard">
      <div className="sidebar">This is the Second Layout</div>
      <div className="main">{children}</div>
    </div>
  );
};

const BackLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <BackLayout>
          <Component {...matchProps} />
        </BackLayout>
      )}
    />
  );
};
export default BackLayoutRoute;
