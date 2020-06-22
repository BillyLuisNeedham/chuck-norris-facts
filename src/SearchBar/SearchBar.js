import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const SearchBar = ({ searchFunc }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(input) => setValue(input)}
          className="search-bar"
          title="search-bar"
        />
        <Button label="Search" onClick={() => searchFunc(value)} />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchFunc: PropTypes.func.isRequired,
};
