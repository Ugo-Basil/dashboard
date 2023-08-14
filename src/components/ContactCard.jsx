import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const ContactCard = () => {
  return (
    <div className="border-b-2 border-t-2 mt-5  w-full">
      <div className="flex flex-col gap-5  py-6 md:flex-row md:justify-start md:items-start md:gap-16">
        <div className="flex flex-col items-start gap-3 ">
          <h5 className="text-[#344054] text-xl md:text-2xl font-semibold">
            Contact email
          </h5>
          <p className="text-[#667085] text-sm">
            Where should invoices be sent?
          </p>
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-3 mb-8">
            <div className="flex gap-3">
              <input type="radio" name="myemail" className="p-4" />
              <label className="text-[14px] text-[#344054] font-semibold p-0">
                Send to my account email
              </label>
            </div>
            <p className="text-[#667085] text-sm px-7">olivia@untitledui.com</p>
          </div>
          <div className="flex flex-col items-start gap-3 w-full md:w-[65%]">
            <div className="flex flex-col items-start  mt-2 gap-3 mb-6 w-full">
              <div className="flex  gap-3">
                <input type="radio" name="myemail" className="p-4" />
                <label className="text-[14px] text-[#344054] font-semibold p-0">
                  Send to an alternative email
                </label>
              </div>
              <div className="flex  items-start md:tems-center w-full px-4">
                <span className="flex items-center p-3 pointer-events-none">
                  <AiOutlineMail className="h-6 w-6 text-[#667085]" />
                </span>
                <input
                  type="email"
                  name="email"
                  className=" px-3 py-3 border-2 border-[#E5E5E5] bg-[#ffff] rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
