import React from "react";
import s from "./header.module.css";
import gitLogo from "../../images/git-logo.svg";
import SearchBox from "../searchBox/searchBox";

function Header(props) {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <img src={gitLogo} />

        <SearchBox setUser={props.setUser} />
      </header>
    </div>
  );
}

export default Header;
