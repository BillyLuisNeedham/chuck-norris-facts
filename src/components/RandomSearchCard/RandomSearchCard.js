import React from "react";
import { Button } from "../Button/Button";
import { SearchBar } from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

export const RandomSearchCard = ({ randomFactFunc, searchFactFunc }) => {
  return (
    <div className="center-cont">
      <div className="card button-cont display-text">
        <div className="margin-medium">
          <Button label="Random Fact" onClick={randomFactFunc} />
        </div>
        <div className="medium-margin">
          <SearchBar searchFunc={searchFactFunc} />
        </div>
      </div>
    </div>
  );
};

RandomSearchCard.propTypes = {
  randomFactFunc: PropTypes.func.isRequired,
  searchFactFunc: PropTypes.func.isRequired,
};
