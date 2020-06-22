import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  background: ${(props) => props.mode.actualColors.background};
  color: ${(props) => props.mode.actualColors.foreground};

  &:hover {
    background: ${(props) => props.mode.actualColors.background};
  }
`;

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(NavLinkStyled);
