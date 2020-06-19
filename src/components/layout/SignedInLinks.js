import React from "react";
import { NavLink } from "react-router-dom";
import DropDownMenu from "./DropDown/DropDownMenu";
import NavItem from "./NavItem";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <NavItem profile={props.profile}>
        <DropDownMenu />
      </NavItem>
    </ul>
  );
};

export default SignedInLinks;
