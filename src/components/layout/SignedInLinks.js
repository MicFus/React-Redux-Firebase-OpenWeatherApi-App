import React from "react";
import DropDownMenu from "./DropDown/DropDownMenu";
import NavItem from "./NavItem";
import styled from "styled-components";
import NavLinkStyled from "./NavLinkStyled";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLinkStyled to="/create" mode={props.mode}>
          New Project
        </NavLinkStyled>
      </li>
      <NavItem profile={props.profile}>
        <DropDownMenu />
      </NavItem>
    </ul>
  );
};

export default SignedInLinks;
