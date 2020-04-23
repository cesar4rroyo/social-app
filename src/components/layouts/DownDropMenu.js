import React from "react";
import { NavLink } from "react-router-dom";

const DownDropMenu = (props) => {
    if (props.isOpen) {
        return (
            <div className="menuContainer">
                <ul>
                    <li>
                        <a onClick={props.logOut}>
                            <i className="fas fa-sign-out-alt"></i> LogOut
                        </a>
                    </li>
                    <li>
                        <NavLink to="/">
                            <i class="fas fa-cog"></i> Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

export default DownDropMenu;
