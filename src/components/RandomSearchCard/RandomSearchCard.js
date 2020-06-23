import React from "react";
import { Button } from "../Button/Button";
import { SearchBar } from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

export const RandomSearchCard = ({ randomFactFunc, searchFactFunc }) => {
  return (
    <div className="card ">
      <div className="random-sea-card-cont">
        <div className="">
          <Button label="Random Fact" onClick={randomFactFunc} red />
        </div>
        <div className="">
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
