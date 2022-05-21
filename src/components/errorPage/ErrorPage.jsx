import React from "react";
import s from "./ErrorPage.module.css";
import userNotFound from "../../images/userNotFound.svg";

const ErrorPage = () => {
  return (
    <div className={s.page}>
      <img className={s.picture} src={userNotFound} alt="user not found" />
      <span className={s.title}>User not found</span>
    </div>
  );
};

export default ErrorPage;
