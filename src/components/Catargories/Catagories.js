import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const Catagories = ({catagories, func}) => {
  
  return (
    <div className="card">
      <p className="card-title">Categories - Pick One</p>
      <div className="card-cont">
        {catagories.map((item, index) => (
          <div key={index}>
            <Button
              onClick={() => func(item)}
              className="card-text"
              key={index}
              label={item.charAt(0).toUpperCase() + item.slice(1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Catagories.propTypes = {
  catagories: PropTypes.array.isRequired,
  func: PropTypes.func.isRequired,
};
