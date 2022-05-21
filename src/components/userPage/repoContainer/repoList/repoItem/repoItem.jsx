import React from "react";
import s from "./repoItem.module.css";

const RepoItem = (props) => {
  return (
    <div className={s.repoItem}>
      <a className={s.link} href={props.repo.html_url} target="_blank">
        {props.repo.name}
      </a>
      <p className={s.description}>{props.repo.description}</p>
    </div>
  );
};

export default RepoItem;
