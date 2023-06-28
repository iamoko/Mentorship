import React from "react";
import _ from "lodash";
import Dummy from "../dummy";
import NotificationItem from "../../components/notifications/notification";

function index() {
  return (
    <div className="flex gap-5 pt-2 home-container">
      <div className="w-60">
        <div className="sticky p-4 mb-4 bg-white border rounded-lg top-16">
          <p className="font-bold">Manage your Notifications</p>
        </div>
      </div>
      <div className="w-1/2 mb-4 overflow-hidden bg-white border rounded-lg">
        {_.times(20, (i) => (
          <NotificationItem key={i} />
        ))}
      </div>
      <div className="w-80">
        <div className="sticky p-4 mb-4 bg-white border rounded-lg top-16">
          <Dummy />
        </div>
      </div>
    </div>
  );
}

export default index;
