import React from "react";

import { ReactComponent } from "./../../assets/svgs/logo.svg";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="Logo">
      <ReactComponent></ReactComponent>
      <h2>Wrench CRM</h2>
    </div>
  );
};

export default Logo;
