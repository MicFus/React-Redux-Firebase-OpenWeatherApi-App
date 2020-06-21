import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const A_Styled = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: var(--speed);
  padding: 0.5rem;

  &:hover {
    background-color: #525357;
  }
`;

const Span_Styled = styled.span`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }

  &:svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`;

function DropDownItem(props) {
  function onClickHandler() {
    if (props.onClickHandler) props.onClickHandler();
    else alert("this component is curently empty");
  }
  return (
    <A_Styled onClick={onClickHandler}>
      <Span_Styled>{props.leftIcon}</Span_Styled>
      {props.children}
    </A_Styled>
  );
}

DropDownItem.propTypes = {
  onClickHandler: PropTypes.func,
};

export default DropDownItem;
