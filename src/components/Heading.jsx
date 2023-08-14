import React from "react";

export const Heading = ({ title, description }) => {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-[#101828]">{title}</h1>
      <p className="text-sm text-[#667085]">{description}</p>
    </div>
  );
};
