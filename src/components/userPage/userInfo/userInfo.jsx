import React from "react";
import s from "./userInfo.module.css";
import followersIcon from "../../../images/followers.svg";
import followIcon from "../../../images/following.svg";

const roundFollowersNum = (num) => {
  if (num < 1000) {
    return num;
  } else {
    return Math.floor(num / 100) / 10 + "k";
  }
};

const UserInfo = (props) => {
  return (
    <div className={s.userInfo}>
      <img src={props.user.avatar_url} className={s.avatar} alt="user" />
      <p className={s.userName}>{props.user.name}</p>
      <a href={props.user.html_url} target="_blank" className={s.githubLink}>
        {props.user.login}
      </a>
      <div className={s.followContainer}>
        <div>
          <img src={followersIcon} alt="fwrs" />
          {roundFollowersNum(props.user.followers)} followers
        </div>
        <div>
          <img src={followIcon} alt="fwng" />
          {roundFollowersNum(props.user.following)} following
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
