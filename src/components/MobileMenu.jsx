// MobileMenu.js
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
  FiBarChart2,
  FiCheckSquare,
  FiFlag,
  FiLayers,
  FiLifeBuoy,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import SearchBar from "./SearchBar";
import NotificationListItem from "./NotificationListItem";
import { NavLink, useLocation } from "react-router-dom";
import Profile from "./Profile";

const MobileMenu = () => {
  const location = useLocation();
  const isActive = location.pathname === "/";
  return (
    <nav className="bg-[#53389E] text-white w-64 min-h-screen absolute z-20 left-0">
      {/* Mobile Menu Links */}
      <div className="px-6 pb-4 mt-2">
        <SearchBar />
      </div>
      <ul className="text-sm">
        <li className="flex items-center py-2 px-6">
          <AiOutlineHome className="mr-3" />
          <a href="/">Home</a>
        </li>
        <NotificationListItem
          icon={<FiBarChart2 />}
          text="Dashboard"
          notificationCount={10}
        />
        <li className="flex items-center py-2 px-6">
          <FiLayers className="mr-3" />
          <span>Projects</span>
        </li>
        <li className="flex items-center py-2 px-6">
          <FiCheckSquare className="mr-3" />
          <span>Tasks</span>
        </li>
        <li className="flex items-center py-2 px-6">
          <FiFlag className="mr-3" />
          <span>Reporting</span>
        </li>
        <li className="flex items-center py-2 px-6">
          <FiUsers className="mr-3" />
          <span>Users</span>
        </li>
        <li className="flex items-center py-2 px-6">
          <FiLifeBuoy className="mr-3" />
          <span>Support</span>
        </li>
        <li
          className={`flex items-center py-2 px-6 ${
            isActive
              ? "bg-[#F9FAFB] text-[#101828] font-semibold shadow-md"
              : ""
          }`}
        >
          <FiSettings className="mr-3" />
          <NavLink to="/">Settings</NavLink>
        </li>
      </ul>
      <Profile />
    </nav>
  );
};

export default MobileMenu;
