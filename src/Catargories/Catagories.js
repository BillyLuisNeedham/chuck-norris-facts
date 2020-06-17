import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";

export const Catagories = (catagories) => {
  return (
    <Card raised={true}>
      <p>Categories - Pick One</p>
      <div className="card-cont">
        {catagories.catagories.map((item, index) => (
          <p className="card-text" key={index}>
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
