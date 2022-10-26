import React from "react";
import Logo from "../Logo/Logo";
import MiniMenu from "../MiniMenu/MiniMenu";
import User from "../User/User";
import "./Header.scss";
const Header = () => {
  return (
    <div className="Header">
      <MiniMenu></MiniMenu>
      <Logo></Logo>
      <User></User>
    </div>
  );
};

export default Header;
