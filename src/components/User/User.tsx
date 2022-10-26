import React from "react";

import { ReactComponent } from "./../../assets/svgs/user.svg";

import "./User.scss";

const User = () => {
  return (
    <div className="User">
      <ReactComponent></ReactComponent>
      <h2>Имя Фамилия</h2>
    </div>
  );
};

export default User;
