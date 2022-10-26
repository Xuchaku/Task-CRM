import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className={`Layout ${toggleMenu ? "activeMenu" : undefined}`}>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
