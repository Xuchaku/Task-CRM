import React, { FC } from "react";
import "./MiniMenu.scss";
type MiniMenuPropsType = {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MiniMenu: FC<MiniMenuPropsType> = ({ toggleMenu, setToggleMenu }) => {
  function toggleMenuHandler() {
    setToggleMenu((prev) => !prev);
  }
  return (
    <div
      className={`MiniMenu ${toggleMenu ? "active" : undefined}`}
      onClick={toggleMenuHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MiniMenu;
