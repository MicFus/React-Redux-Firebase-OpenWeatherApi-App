import React from "react";
import NavLinkStyled from "./NavLinkStyled";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLinkStyled to="/signup">Signup</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/signin">Login</NavLinkStyled>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
