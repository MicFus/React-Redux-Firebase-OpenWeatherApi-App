import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProject } from "../../store/actions/projectActions";
import DivStyled from "../common/DivStyled";
import SpanStyled from "../common/SpanStyled";

const ProjectSummary = ({ deleteProject, project, actualColors }) => {
  return (
    <DivStyled
      actualColors={actualColors}
      className="card z-depth-0 project-summary"
    >
      <Link to={"/project/" + project.id}>
        <div className="card-content grey-text text-darken-3">
          <SpanStyled className="card-title" actualColors={actualColors}>
            {project.title}
          </SpanStyled>
          <p>
            Posted by {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="grey-text">
            {moment(project.createdAt.toDate()).calendar()}
          </p>
        </div>
      </Link>
      <span
        onClick={() => {
          deleteProject(project.id);
        }}
      >
        ❌
      </span>
    </DivStyled>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    actualColors: state.mode.actualColors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);
