import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import moment from "moment";
const ProjectDetails = (props) => {
    // const id = props.match.params.id;
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (project) {
        return (
            <div className="container pt-5">
                <div className="card testimonial-card">
                    <div className="card-up"></div>
                    <div className="row">
                        <div className="col-8">
                            <div className="card-body">
                                <h4 className="center dashborder letraTitleCard">
                                    {project.title}
                                </h4>
                                <h4 className="textCard letraContentCard">
                                    <i className="fas fa-quote-left"></i>{" "}
                                    {project.content}
                                </h4>
                            </div>
                            <span className="orange-text">
                                <i className="far fa-clock"></i>{" "}
                                {moment(project.createAt.toDate()).calendar()}
                            </span>
                        </div>
                        <div className="col-4 center pt-4">
                            <div className="avatarCard">
                                <img
                                    src="https://www.sairv.org/wp-content/uploads/2019/07/PERFIL-VACIO.png"
                                    height="50px"
                                    className="rounded-circle pt-2"
                                    alt="avatar"
                                />

                                <div className="pt-2">
                                    <span className="userCard">
                                        {project.authorFirstName}{" "}
                                        {project.authorLastName}{" "}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_footer">
                        <ul className="list_footer">
                            <li>
                                <i className="fas fa-heart"></i>
                            </li>
                            <li>
                                <i className="fas fa-comment"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading project ...</p>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
