import React, { FC, useState } from "react";

import Menu from "../../types/Menu/Menu";
import SimpleItemMenu from "../SimpleItemMenu/SimpleItemMenu";
import "./ComplexItemMenu.scss";

type ComplexItemMenuPropsType = {
  options: Menu;
};

const ComplexItemMenu: FC<ComplexItemMenuPropsType> = ({ options }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { children: childrenItems } = options;
  const classes = `ComplexItemMenu ${open ? "up" : "down"}`;

  function toggleMenuHandler() {
    setOpen(!open);
  }

  return (
    <>
      <div className={classes} onClick={toggleMenuHandler}>
        <SimpleItemMenu options={options}></SimpleItemMenu>
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
