import React, { FC } from "react";
import { useOutletContext } from "react-router-dom";

type RouteCloseMenuPropsType = {
  Component: React.FC;
};

const RouteCloseMenu: FC<RouteCloseMenuPropsType> = ({ Component }) => {
  const setToggleMenu: React.Dispatch<React.SetStateAction<boolean>> =
    useOutletContext();

  function hideSidebarHandler() {
    setToggleMenu(false);
  }

  return (
    <div onClick={hideSidebarHandler}>
      <Component></Component>
    </div>
  );
};

export default RouteCloseMenu;
