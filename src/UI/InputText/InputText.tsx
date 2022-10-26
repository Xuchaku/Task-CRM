import React, { FC } from "react";
import "./InputText.scss";

type InputTextPropsType = {
  placeholder: string;
};
const InputText: FC<InputTextPropsType> = ({ placeholder }) => {
  return <input className="InputText" type="text" placeholder={placeholder} />;
};

export default InputText;
