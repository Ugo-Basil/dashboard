import React from "react";
import CardOptions from "./CardOptions";

const CardDetails = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 items-start">
      <div className="flex flex-col justify-start items-start gap-3 md:w-1/3">
        <h1 className="text-[#344054] text-2xl font-semibold">Card Details</h1>
        <p className="text-[#667085] text-sm">Select default payment method</p>
      </div>
      <div className="w-full md:w-2/3">
        <CardOptions />
      </div>
    </div>
  );
};

export default CardDetails;
