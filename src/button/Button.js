import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button/Button";

export const ButtonComp = ({ label, onClick }) => {
  return (
    <Button variant='contained' onClick={onClick}>{label}</Button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
