import React, { useState } from "react";

const tabs = [
  {
    name: "My details",
    component: <div>My Details</div>,
  },
  {
    name: "Profile",
    component: <div>Profile</div>,
  },
  {
    name: "Password",
    component: <div>Password</div>,
  },
  {
    name: "Team",
    component: <div>Billing</div>,
  },
  {
    name: "Plan",
    component: <div>Integrations</div>,
  },

  {
    name: "Billing",
    component: <div>Billing</div>,
  },

  {
    name: "Notifications",
    component: <div>Notifications</div>,
  },

  {
    name: "Integrations",
    component: <div>Integrations</div>,
  },
  {
    name: "API",
    component: <div>API</div>,
  },
];

const SettingsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="mt-4 w-full">
      <nav className="block md:hidden">
        <div className="flex overflow-x-scroll hide-scrollbar border-t border-gray-300">
          <ul className="flex border-t border-gray-300">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`flex-shrink-0 text-[#667085] text-sm py-3 px-4 ${
                  index === activeTab ? "bg-[#53389E] text-white" : ""
                }`}
                onClick={() => handleTabChange(index)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="hidden md:block">
        <ul className="grid md:flex md:justify-between items-center p-3 rounded lg:w-[54%] ">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`text-[#667085] text-sm p-3 flex-shrink-0 border text-center ${
                index === activeTab ? "border-[#53389E]  text-sm" : ""
              }`}
              onClick={() => handleTabChange(index)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SettingsTab;

