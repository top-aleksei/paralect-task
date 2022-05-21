import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./userInfo/userInfo";
import RepoContainer from "./repoContainer/repoContainer";
import s from "./userPage.module.css";
import Loader from "../loader/Loader";

const UserPage = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const getUser = async (username) => {
    const response = await fetch(` https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw await response.json();
    }

    const res = await response.json();
    setUser(res);
    return res;
  };

  const getRepos = async (username, page = 1) => {
    const response = await fetch(
      ` https://api.github.com/users/${username}/repos?page=${page}&per_page=4`
    );
    const res = await response.json();
    setRepos(res);
    return res;
  };

  useEffect(() => {
    getUser(props.currentUser)
      .catch((e) => {
        navigate("/error");
        return {};
      })
      .then((user) => getRepos(user.login));
  }, [props.currentUser]);

  if (user) {
    return (
      <div className={s.container}>
        <UserInfo user={user} />
        <RepoContainer
          repos={repos}
          getRepos={getRepos}
          user={user}
          setRepos={setRepos}
        />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default UserPage;
