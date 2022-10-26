import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../types/Menu/Menu";
import "./SimpleItemMenu.scss";
type SimpleItemMenuPropsType = {
  options: Menu;
  level?: number;
};

const SimpleItemMenu: FC<SimpleItemMenuPropsType> = ({
  options,
  level = 0,
}) => {
  const { text, component: ElemSvg, to } = options;
  const levelMarginStyle = { marginLeft: level * 48 + "px" };
  return (
    <div style={levelMarginStyle} className="SimpleItemMenu">
      <ElemSvg></ElemSvg>
      <h2>
        <NavLink to={to}>{text}</NavLink>
      </h2>
    </div>
  );
};

export default SimpleItemMenu;
