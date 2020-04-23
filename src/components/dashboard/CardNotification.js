import React from "react";
import { Component } from "react";

class CardNotifications extends Component {
    render() {
        return (
            <div className="toast-container">
                <div className="toast-header">
                    <img
                        src="iconApp.png"
                        height="30px"
                        className="rounded mr-2"
                        alt="..."
                    />
                    <strong className="mr-auto notificationTitle">
                        Your Notes
                    </strong>
                    <small className="text-muted">{this.props.time}</small>
                </div>
                <div className="toast-body">
                    <span className="userName"> {this.props.user}</span>{" "}
                    <span className="letraLinks">{this.props.content}</span>
                </div>
            </div>
        );
    }
}

export default CardNotifications;
