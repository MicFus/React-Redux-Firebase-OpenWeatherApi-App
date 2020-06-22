import React from "react";
import DivStyled from "../common/DivStyled";
import { connect } from "react-redux";
import styled from "styled-components";

const SpanStyled = styled.span`
  color: ${(props) => props.actualColors.foreground};
`;

const Notifications = ({ actualColors }) => {
  return (
    <DivStyled className="card z-depth-0" actualColors={actualColors}>
      <div className="card-content">
        <span className="card-title">Notifications</span>
        <ul className="notifications">
          <li>Notification</li>
          <li>Notification</li>
          <li>Notification</li>
          <li>Notification</li>
        </ul>
      </div>
    </DivStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    actualColors: state.mode.actualColors,
  };
};

export default connect(mapStateToProps)(Notifications);
