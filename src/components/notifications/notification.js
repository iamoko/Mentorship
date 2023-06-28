import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

function NotificationItem() {
  return (
    <div className="flex px-8 pt-6 hover:bg-sky-100 hover:cursor-pointer">
      <img
        src="https://www.visiongroup.co.ug/wp-content/uploads/2022/12/nv-product-371x347.jpg"
        alt="profile"
        className="object-cover w-12 h-12 rounded-full"
      />
      <div className="ps-4">
        <p className="text-sm">
          <span className="font-bold">
            New Vision: Your trusted source for breaking news, analysis.
          </span>
          Biggest News Source in Uganda and the East African Region ,Breaking
          news in <span className="font-bold">Uganda</span> and Daily news and
          the latest from Uganda, New vision News, breaking news
        </p>
      </div>
      <div className="ms-2">
        <p className="text-xs text-slate-600">2h</p>
        <FiMoreHorizontal />
      </div>
    </div>
  );
}

export default NotificationItem;
