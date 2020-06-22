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
        <form>
          <input
            type="text"
            value={value}
            onChange={changeTextHandler}
            className="search-bar"
            title="search-bar"
          />
          <Button label="Search" onClick={() => searchFunc(value)} />
        </form>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchFunc: PropTypes.func.isRequired,
};
