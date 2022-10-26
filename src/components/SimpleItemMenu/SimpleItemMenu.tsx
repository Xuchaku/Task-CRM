import React, { FC, useState } from "react";
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
  const [activeStyle, setActiveStyle] = useState<boolean>(false);

  const { text, component: ElemSvg, to } = options;
  const levelMarginStyle = { marginLeft: level * 48 + "px" };
  const classes = `SimpleItemMenu ${activeStyle ? "active" : undefined}`;

  return (
    <div style={levelMarginStyle} className={classes}>
      <ElemSvg></ElemSvg>
      <h2>
        <NavLink
          end
          style={({ isActive }) => {
            setActiveStyle(isActive);
            return undefined;
          }}
          to={to}
        >
          {text}
        </NavLink>
      </h2>
    </div>
  );
};

export default SimpleItemMenu;
