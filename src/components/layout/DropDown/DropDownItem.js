import React from "react";
import PropTypes from "prop-types";

function DropDownItem(props) {
  function onClickHandler() {
    if (props.onClickHandler) props.onClickHandler();
    else alert("this component is curently empty");
  }
  return (
    <a href="#" className="menu-item" onClick={onClickHandler}>
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
    </a>
  );
}

DropDownItem.propTypes = {
  onClickHandler: PropTypes.func,
};

export default DropDownItem;
