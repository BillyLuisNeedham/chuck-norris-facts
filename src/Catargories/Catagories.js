import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";

export const Catagories = (catagories, onClick) => {
  return (
    <Card raised={true}>
      <p className="card-title">Categories - Pick One</p>
      <div className="card-cont">
        {catagories.catagories.map((item, index) => (
          <p onClick={() => onClick(item)} className="card-text" key={index}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </p>
        ))}
      </div>
    </Card>
  );
};

Catagories.propTypes = {
  catagories: PropTypes.array.isRequired,
};
