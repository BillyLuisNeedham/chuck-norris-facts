import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const Catagories = (catagories, func) => {
    // TODO: sort out function passed by props 
    // TODO: center card container
  return (
    <div className='card'>
      <p className="card-title">Categories - Pick One</p>
      <div className="card-cont">
        {catagories.catagories.map((item, index) => (
          <div onClick={() => func(item)}>
            <Button
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
};
