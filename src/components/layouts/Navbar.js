import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(props);
    const links = auth.uid ? (
        <SignedInLinks profile={profile} />
    ) : (
        <SignedOutLinks />
    );

    return (
        <nav className="navbar fixed-top navbar-light colorNav">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img
                        className="icon d-inline-block align-top"
                        src="iconApp.png"
                        alt=""
                    />{" "}
                    <span className="navTitle">Your Notes</span>
                </Link>

                {links}
            </div>
        </nav>
    );
};
const mapStateToProps = (state) => {
    console.log(state);

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

export default connect(mapStateToProps)(Navbar);
