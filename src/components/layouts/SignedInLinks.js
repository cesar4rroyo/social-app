import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { btnBurger } from "./Navbar.js";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li className="no_show">
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li className="no_show">
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li id="profile_circle">
                <NavLink
                    to="/"
                    className="btn btn-info btn-circle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    );
};
// const btnMenu = document.getElementById("menu");
// const menuItens = document.querySelector("itens");
// const hideShow = () => {
//     if (menuItens.classList.contains("is_active")) {
//         btnMenu.classList.remove("is_active");
//     } else {
//         btnMenu.classList.add("is_active");
//     }
// };
// btnMenu.addEventListener("click", hideShow());

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
