import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  background: ${(props) =>
    props.mode.darkActive ? props.mode.colors.dark2 : props.mode.colors.light};
  color: ${(props) =>
    props.mode.darkActive ? props.mode.colors.light : props.mode.colors.dark2};

  &:hover {
    background: ${(props) =>
      props.mode.darkActive
        ? props.mode.colors.dark4
        : props.mode.colors.light1};
  }
`;

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(NavLinkStyled);
