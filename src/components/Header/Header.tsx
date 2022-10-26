import React, { FC } from "react";

import Logo from "../Logo/Logo";
import MiniMenu from "../MiniMenu/MiniMenu";
import User from "../User/User";
import "./Header.scss";

type HeaderPropsType = {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: FC<HeaderPropsType> = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div className="Header">
      <MiniMenu
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      ></MiniMenu>
      <Logo></Logo>
      <User></User>
    </div>
  );
};

export default Header;
