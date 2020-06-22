import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const ResultsDisplay = ({ display }) => {
  const [multiPage, setMultiPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    Array.isArray(display) ? setMultiPage(true) : setMultiPage(false);
  }, [display]);

  const nextPageHandler = () => {
    if (currentPage !== display.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPageHandler = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const singleDisplay = (
    <p title="result-display" className="display-text">
      {display}
    </p>
  );

  const multipleDisplay = (
    <div>
      <p className="display-text">{display.length} Results</p>
      <div className="display-cont">
        <Button
          label="<"
          title="previous-button"
          onClick={previousPageHandler}
          blue={true}
        />
        <Button
          label=">"
          title="next-button"
          onClick={nextPageHandler}
          blue={true}
        />
        <p title="result-display" className="display-text">
          {display[currentPage]}
        </p>
      </div>
    </div>
  );

  return (
    <div className="card catagories-cont">
      {multiPage ? multipleDisplay : singleDisplay}
    </div>
  );
};

ResultsDisplay.propTypes = {
  display: PropTypes.any,
};
