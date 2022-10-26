import React from "react";
import "./ErrorPage.scss";
import { ReactComponent as ErrorSvg } from "./../../assets/svgs/error.svg";
const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <p>Данная страница еще не создана...</p>
      <ErrorSvg></ErrorSvg>
    </div>
  );
};

export default ErrorPage;
