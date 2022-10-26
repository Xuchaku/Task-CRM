import React, { FC } from "react";

import "./Button.scss";

type ButtonTypeProps = {
  text: string;
  icon: React.FunctionComponent;
  onClick: () => void;
};

const Button: FC<ButtonTypeProps> = ({ text, icon: ElemSvg, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      <ElemSvg></ElemSvg>
      <span>{text}</span>
    </button>
  );
};

export default Button;
