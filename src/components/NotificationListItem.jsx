import React from "react";
import { FiBarChart2 } from "react-icons/fi";

const NotificationListItem = ({ icon, text, notificationCount }) => {
  return (
    <li className="flex items-center justify-between py-2 px-6  relative w-full">
      {icon && <span className="mr-3">{icon}</span>}
      <span className="mr-64">{text}</span>
      {notificationCount > 0 && (
        <span className="absolute top-0 right-0  bg-[#F2F4F7] text-[#344054] rounded-full px-4 py-1">
          {notificationCount}
        </span>
      )}
    </li>
  );
};

export default NotificationListItem;
