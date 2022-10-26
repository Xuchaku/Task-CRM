import React, { FC } from "react";
import "./SimpleItemMenu.scss";
type SimpleItemMenuPropsType = {
  text: string;
  svg: React.FunctionComponent;
  level?: number;
};

const SimpleItemMenu: FC<SimpleItemMenuPropsType> = ({
  text,
  svg: ElemSvg,
  level = 0,
}) => {
  const levelMarginStyle = { marginLeft: level * 48 + "px" };
  return (
    <div style={levelMarginStyle} className="SimpleItemMenu">
      <ElemSvg></ElemSvg>
      <h2>{text}</h2>
    </div>
  );
};

export default SimpleItemMenu;
