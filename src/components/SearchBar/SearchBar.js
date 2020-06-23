import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const SearchBar = ({ searchFunc }) => {
  const [value, setValue] = useState("");
  const changeTextHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="search-bar-cont">
        <input
          type="text"
          value={value}
          onChange={changeTextHandler}
          className="search-bar"
          title="search-bar"
        />
        <div className="search-bar-button-cont">
          <Button label="Search" onClick={() => searchFunc(value)} />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchFunc: PropTypes.func.isRequired,
};
