import React, { FC } from "react";
import "./Button.scss";
type ButtonTypeProps = {
  text: string;
  icon: React.FunctionComponent;
};
const Button: FC<ButtonTypeProps> = ({ text, icon: ElemSvg }) => {
  return (
    <button className="Button">
      <ElemSvg></ElemSvg>
      <span>{text}</span>
    </button>
  );
};

export default Button;
