import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink className="singOutLink" to="/signup">
                    <span className="hoverNav">Signup</span>
                </NavLink>
            </li>
        </ul>
    );
};

export default SignedOutLinks;
