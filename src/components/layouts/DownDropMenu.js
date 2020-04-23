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
                        <a>
                            <i class="fas fa-cog"></i> Settings
                        </a>
                    </li>
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

export default DownDropMenu;
