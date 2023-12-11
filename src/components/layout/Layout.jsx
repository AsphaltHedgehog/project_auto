import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../header/Header";

// styles
import { PageContainer } from "./Layout.styled";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Layout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
        <ToastContainer/>
      </PageContainer>
    </>
  );
}

export default Layout;