import React from "react";
import EmptyRepos from "./emptyRepos/empteRepos";
import RepoItem from "./repoItem/repoItem";
import s from "./repoList.module.css";

const RepoList = (props) => {
  let mappingRepos = props.repos.map((el) => {
    return <RepoItem repo={el} key={el.id} />;
  });

  if (props.repos.length != 0) {
    return (
      <div>
        <div className={s.numRepos}>
          Repositories ({props.user.public_repos})
        </div>
        <div className={s.repoContainer}> {mappingRepos}</div>
      </div>
    );
  } else {
    return <EmptyRepos />;
  }
};

export default RepoList;
