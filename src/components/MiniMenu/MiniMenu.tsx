import React, { FC } from "react";

import "./MiniMenu.scss";

type MiniMenuPropsType = {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MiniMenu: FC<MiniMenuPropsType> = ({ toggleMenu, setToggleMenu }) => {
  const classes = `MiniMenu ${toggleMenu ? "active" : undefined}`;

  function toggleMenuHandler() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <div className={classes} onClick={toggleMenuHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MiniMenu;
