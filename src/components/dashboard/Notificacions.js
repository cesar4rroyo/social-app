import React from "react";
import moment from "moment";
import CardNotifications from "./CardNotification";

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card z-depth-0 containerNotifications">
                <div className="card-content">
                    <span className="card-title center titleNotifications">
                        Notifications
                    </span>
                    <ul className="notifications" id="containerId">
                        {notifications &&
                            notifications.map((item) => {
                                return (
                                    <CardNotifications
                                        key={item.id}
                                        user={item.user}
                                        content={item.content}
                                        time={moment(
                                            item.time.toDate()
                                        ).fromNow()}
                                    />
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
