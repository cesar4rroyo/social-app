import React from "react";

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
                            <i className="fas fa-cog"></i> Settings
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
