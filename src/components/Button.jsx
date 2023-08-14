import React from "react";

const Button = ({ label, icon, onClick }) => {
  return (
    <button
      className="flex items-center px-4 py-2 text-[#667085] rounded  focus:outline-none hover:ring hover:ring-[#6941C6] mt-2 "
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
