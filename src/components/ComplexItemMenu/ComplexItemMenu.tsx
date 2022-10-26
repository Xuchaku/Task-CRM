import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../types/Menu/Menu";
import SimpleItemMenu from "../SimpleItemMenu/SimpleItemMenu";
import "./ComplexItemMenu.scss";

type ComplexItemMenuPropsType = {
  options: Menu;
};

const ComplexItemMenu: FC<ComplexItemMenuPropsType> = ({ options }) => {
  const { text, component: ElemSvg, children: childrenItems, to } = options;
  const [open, setOpen] = useState<boolean>(false);
  function toggleMenuHandler() {
    setOpen(!open);
  }
  return (
    <>
      <div className="ComplexItemMenu" onClick={toggleMenuHandler}>
        <ElemSvg></ElemSvg>
        <h2>
          <NavLink to={to}>{text}</NavLink>
        </h2>
      </div>
      {open &&
        childrenItems?.map((itemMenu) => {
          return (
            <SimpleItemMenu key={itemMenu.id} options={itemMenu} level={1} />
          );
        })}
    </>
  );
};

export default ComplexItemMenu;