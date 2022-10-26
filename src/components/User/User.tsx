import React from "react";
import "./User.scss";
import { ReactComponent } from "./../../assets/svgs/user.svg";
const User = () => {
  return (
    <div className="User">
      <ReactComponent></ReactComponent>
      <h2>Имя Фамилия</h2>
    </div>
  );
};

export default User;
