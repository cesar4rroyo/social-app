import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
    return (
        <div className="card testimonial-card">
            <div class="card-up"></div>
            <div class="avatar mx-auto white">
                <img
                    src="https://www.sairv.org/wp-content/uploads/2019/07/PERFIL-VACIO.png"
                    height="200px"
                    class="rounded-circle pt-2"
                    alt="woman avatar"
                />
            </div>
            <div className="card-body">
                <h4 className="textCard">
                    <i class="fas fa-quote-left"></i> {project.title}
                </h4>
                <p>
                    Posted by {project.authorFirstName} {project.authorLastName}{" "}
                </p>
                <p className="grey-text">
                    {moment(project.createAt.toDate()).calendar()}
                </p>
            </div>
        </div>
    );
};

export default ProjectSummary;
