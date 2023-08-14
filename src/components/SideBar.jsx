// Sidebar.js

// import "../styles/sidebar.css";
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
import sideImage from "../assets/Sidebar.png";
import Logo from "../assets/Content.png";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import NotificationListItem from "./NotificationListItem";
import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const isActive = location.pathname === "/";
  return (
    <>
      <div className=" hidden md:block border-r-2 px-6  h-screen">
        <nav className="bg-[#FFFFFF] text-[#344054] w-64 flex-shrink-0 mb-10 ">
          <div className="py-4 px-6 flex mb-5">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-semibold ml-2">Dashboard UI</h1>
          </div>
          <div className="px-6 pb-4">
            <SearchBar />
          </div>
          <ul className="text-sm mb-10">
            <li className="flex items-center py-2 px-6">
              <AiOutlineHome className="mr-3" />
              <span>Home</span>
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
                isActive ? "bg-[#F9FAFB] font-semibold shadow-md" : ""
              }`}
            >
              <FiSettings className="mr-3" />
              <a href="/">Settings</a>
            </li>
          </ul>
          <div className="mt-auto px-6 py-4 mb-5 bg-[#F9FAFB] shadow-md">
            <h2 className="text-sm font-semibold">New features available!</h2>
            <p className="text-xs">
              Check out the new dashboard view. Pages now load faster.
            </p>
            <img
              src={sideImage}
              className="mt-2 w-full rounded"
              alt="New Features"
            />
            <div className="flex justify-between mt-2">
              <p className="text-xs">Dismiss</p>
              <span className="text-xs">What's new?</span>
            </div>
          </div>
          <Profile />
        </nav>
      </div>
    </>
  );
};

export default SideBar;
