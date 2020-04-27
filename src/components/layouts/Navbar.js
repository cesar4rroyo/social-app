import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
export const btnBurger = document.getElementById("menu");

const Navbar = (props) => {
    const { auth, profile } = props;

    const links = auth.uid ? (
        <SignedInLinks profile={profile} />
    ) : (
        <SignedOutLinks />
    );

    return (
        <nav className="navbar colorNav">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img
                        className="icon d-inline-block align-top"
                        src="iconApp.png"
                        alt="profile"
                    />{" "}
                    <span className="navTitle">Your Notes</span>
                </Link>

                {links}
            </div>
        </nav>
    );
};
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

export default connect(mapStateToProps)(Navbar);
