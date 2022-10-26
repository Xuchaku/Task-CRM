import React, { FC, useState } from "react";
import Menu from "../../types/Menu/Menu";
import SimpleItemMenu from "../SimpleItemMenu/SimpleItemMenu";
import "./ComplexItemMenu.scss";

type ComplexItemMenuPropsType = {
  text: string;
  svg: React.FunctionComponent;
  childrenItems: Menu[];
};

const ComplexItemMenu: FC<ComplexItemMenuPropsType> = ({
  text,
  svg: ElemSvg,
  childrenItems,
}) => {
  const [open, setOpen] = useState(false);
  function toggleMenuHandler() {
    setOpen(!open);
  }
  return (
    <>
      <div className="ComplexItemMenu" onClick={toggleMenuHandler}>
        <ElemSvg></ElemSvg>
        <h2>{text}</h2>
      </div>
      {open &&
        childrenItems.map((itemMenu) => {
          return (
            <SimpleItemMenu
              key={itemMenu.id}
              text={itemMenu.text}
              svg={itemMenu.component}
              level={1}
            />
          );
        })}
    </>
  );
};

export default ComplexItemMenu;
