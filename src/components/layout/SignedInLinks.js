import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import DropDownMenu from "./DropDown/DropDownMenu";
import NavItem from "./NavItem";

const SignedInLinks = (props) => {
  console.log(props.profile);
  console.log(props.profile.initials);
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <NavItem profile={props.profile}>
        <DropDownMenu />
      </NavItem>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
