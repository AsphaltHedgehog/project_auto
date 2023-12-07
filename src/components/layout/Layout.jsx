import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../header/Header";

// styles
import { PageContainer } from "./Layout.styled";


const Layout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
}

export default Layout;