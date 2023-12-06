import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../header/Header";


const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
}

export default Layout;