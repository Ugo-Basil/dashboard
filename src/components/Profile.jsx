/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import avatar from "../assets/Avatar.png";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textColor = isMobileScreen ? "#FFFFFF" : "#101828";

  return (
    <div className="border-t-2 flex justify-between items-center    m-3">
      <div className="flex flex-col">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex flex-col">
        <h1 className={`text-lg ${isMobileScreen ? "text-white" : ""}`}>
          Olivia Rhye
        </h1>
        <p className={`text-sm mb-2 ${isMobileScreen ? "text-white" : ""}`}>
          olivia@untitledui.com
        </p>
      </div>

      <div className="flex flex-col">
        <FiLogOut />
      </div>
    </div>
  );
};

export default Profile;
