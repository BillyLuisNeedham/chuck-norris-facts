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
    if (currentPage !== display.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPageHandler = () => {
    if (currentPage !== display.length) {
      setCurrentPage(currentPage - 1);
    }
  };

  const singleDisplay = <p title="result-display">{display}</p>;

  const multipleDisplay = (
    <div>
        <p>{display.length} Results</p>
      <Button label="<" title="previous-button" onClick={previousPageHandler} />
      <p title="result-display">{display[currentPage]}</p>
      <Button label=">" title="next-button" onClick={nextPageHandler} />
    </div>
  );

  return <div>{multiPage ? multipleDisplay : singleDisplay}</div>;
};

ResultsDisplay.propTypes = {
  display: PropTypes.any,
};
