import React, { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const LazyLoad = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.stop();
    };
  });

  return "";
};
export default LazyLoad;
