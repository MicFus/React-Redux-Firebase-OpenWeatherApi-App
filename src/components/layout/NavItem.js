import React, { useState } from "react";
import PropTypes from "prop-types";

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a
        className="btn btn-floating blue lighten-1"
        onClick={() => setOpen(!open)}
      >
        {props.profile.initials}
      </a>
      {open && props.children}
    </li>
  );
}

NavItem.propTypes = {
  profile: PropTypes.object,
};

export default NavItem;
