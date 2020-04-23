import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import DownDropMenu from "./DownDropMenu";
import { useState } from "react";

const SignedInLinks = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };
    return (
        <div>
            <ul className="right letraLinks">
                <li className="no_show">
                    <NavLink to="/create">
                        <span className="hoverNav">New Project</span>
                    </NavLink>
                </li>
                <li className="no_show">
                    <a onClick={props.signOut}>
                        <span className="hoverNav">Log Out</span>
                    </a>
                </li>
                <li id="profile_circle">
                    <NavLink
                        to="/"
                        className="btn btn-circle btn-color"
                        type="button"
                        onClick={handleClick}
                    >
                        {props.profile.initials}
                    </NavLink>
                </li>
            </ul>
            <DownDropMenu isOpen={isOpen} logOut={props.signOut} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
