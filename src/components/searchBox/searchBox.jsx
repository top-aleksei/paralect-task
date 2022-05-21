import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./searchBox.module.css";
import searchBoxLens from "../../images/searchBoxLens.svg";

const SearchBox = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const search = (e) => {
    e.preventDefault();
    props.setUser(inputValue);
    navigate(`/${inputValue}`);
    setInputValue("");
  };

  return (
    <form className={s.wrapper} onSubmit={search}>
      <button className={s.button}>
        <img src={searchBoxLens} />
      </button>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        type="text"
        className={s.input}
        placeholder="Enter GitHub username"
      />
    </form>
  );
};

export default SearchBox;
