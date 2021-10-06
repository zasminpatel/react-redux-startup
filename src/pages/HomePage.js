import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <Link to={"/admin"}>ClickMe</Link>
    </div>
  );
};

export default HomePage;
