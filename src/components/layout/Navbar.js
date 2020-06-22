import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import styled from "styled-components";

const Nav_Styled = styled.nav`
  background-color: ${(props) => props.mode.actualColors.background};
  color: ${(props) => props.mode.actualColors.foreground};
`;

const Navbar = (props) => {
  return (
    <Nav_Styled mode={props.mode}>
      <div className="container">
        <Link to="/" className="brand-logo">
          {" "}
          My Notes App
        </Link>
        {props.auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </Nav_Styled>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    auth: state.firebase.auth,
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(Navbar);
