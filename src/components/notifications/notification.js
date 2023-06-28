import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const NotificationItem = React.forwardRef(({ notification }, ref) =>{
  const postBody = (
    <div className="flex px-8 py-4 hover:bg-sky-100 hover:cursor-pointer">
      <img
        src="https://www.visiongroup.co.ug/wp-content/uploads/2022/12/nv-product-371x347.jpg"
        alt="profile"
        className="object-cover w-12 h-12 rounded-full"
      />
      <div className="w-full ps-4">
        <p className="text-sm break-all whitespace-pre-line line-clamp-3">
          {notification.body}
        </p>
      </div>
      <div className="ms-2">
        <p className="text-xs text-slate-600">2h</p>
        <FiMoreHorizontal />
      </div>
    </div>
  );

  const content = ref ? (
    <div ref={ref}>{postBody}</div>
  ) : (
    <div>{postBody}</div>
  );

  return content;

})

export default NotificationItem;
