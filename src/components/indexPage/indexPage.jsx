import React from "react";
import s from "./indexPage.module.css";
import search from "../../images/IndexPageLens.svg";

const IndexPage = () => {
  return (
    <div className={s.item}>
      <img src={search} className={s.picture} />
      <span className={s.title}>Start with searching a GitHub user</span>
    </div>
  );
};
export default IndexPage;
