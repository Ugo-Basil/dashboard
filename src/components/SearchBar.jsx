import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="pl-10 pr-4 py-2 rounded border border-gray-300 focus:ring focus:ring-[#667085] focus:border-[#667085] focus:outline-none w-full"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
