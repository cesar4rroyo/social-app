import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import {
    likeProject,
    disLikeProject,
} from "../../store/actions/projectActions";

const ProjectSummary = ({ project }) => {
    function iconLike() {
        if (project.like) {
            return <i className="fas fa-heart" onClick={handleDislike}></i>;
        } else {
            return <i className="far fa-heart" onClick={handleLike}></i>;
        }
    }
    const handleLike = () => {
        likeProject(project.id);
    };
    const handleDislike = () => {
        disLikeProject(project.id);
    };

    return (
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
                    <li>{iconLike()}</li>
                    <li>
                        <i className="fas fa-comment"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        likeProject: (id) => dispatch(likeProject(id)),
        disLikeProject: (id) => dispatch(disLikeProject(id)),
    };
};
export default connect(null, mapDispatchToProps)(ProjectSummary);
