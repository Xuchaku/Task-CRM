import React from "react";
import Logo from "../Logo/Logo";
import User from "../User/User";
import "./Header.scss";
const Header = () => {
  return (
    <div className="Header">
      <Logo></Logo>
      <User></User>
    </div>
  );
};

export default Header;
