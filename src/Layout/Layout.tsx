import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="Layout">
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
