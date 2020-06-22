import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProject } from "../../store/actions/projectActions";

const ProjectSummary = ({ deleteProject, project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <Link to={"/project/" + project.id}>
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>
            Posted by {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="grey-text">
            {moment(project.createdAt.toDate()).calendar()}
          </p>
        </div>
      </Link>
      <button
        onClick={() => {
          deleteProject(project.id);
        }}
      >
        ❌
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectSummary);
