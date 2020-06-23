import React from "react";
import DropDownMenu from "./DropDown/DropDownMenu";
import NavItem from "./NavItem";
import NavLinkStyled from "./NavLinkStyled";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLinkStyled to="/create" mode={props.mode}>
          New Note
        </NavLinkStyled>
      </li>
      <NavItem profile={props.profile}>
        <DropDownMenu />
      </NavItem>
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  profile: state.firebase.profile,
});

export default connect(mapStateToProps)(SignedInLinks);
