import React from "react";
import s from "./repoContainer.module.css";

import Loader from "../../loader/Loader";
import RepoList from "./repoList/repoList";
import Paginator from "../../paginator/paginator";

const RepoContainer = (props) => {
  let addingPagination = (props) => {
    if (props.user.public_repos > 4) {
      return (
        <Paginator
          getRepos={props.getRepos}
          user={props.user}
          setRepos={props.setRepos}
        />
      );
    }
  };

  return (
    <div className={s.container}>
      {props.repos ? (
        <RepoList user={props.user} repos={props.repos} />
      ) : (
        <Loader />
      )}

      {addingPagination(props)}
    </div>
  );
};

export default RepoContainer;
