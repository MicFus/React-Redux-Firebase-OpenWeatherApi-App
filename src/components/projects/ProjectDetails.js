import React from "react";

const ProjectDetails = (props) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            {props.match.params.id}. Project Title
          </span>
          <p>
            {" "}
            Michal Fusiarz bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the MF</div>
          <div>2nd September</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
