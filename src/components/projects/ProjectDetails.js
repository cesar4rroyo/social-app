import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellat, magnam vero! Nobis non labore, ut
                        corporis modi magni laudantium qui provident distinctio
                        ullam aliquid quibusdam id vel sunt officia nihil.
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by cesar4rroyo</div>
                    <div>12th April, 3pm</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
