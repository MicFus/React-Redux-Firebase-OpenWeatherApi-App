import React from "react";
import PropTypes from "prop-types";

function DropDownItem(props) {
  return (
    <a href="#" className="menu-item" onClick={props.onClickHandler}>
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
    </a>
  );
}

DropDownItem.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default DropDownItem;
