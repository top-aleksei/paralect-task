import React from "react";
import noRepos from "../../../../../images/emptyRepos.svg";

import s from "./emptyRepos.module.css";

const EmptyRepos = (props) => {
  return (
    <div className={s.item}>
      <img src={noRepos} className={s.picture} />
      <p className={s.title}>Repository list is empty</p>
    </div>
  );
};

export default EmptyRepos;
