import React from "react";
import ContactCard from "./ContactCard";
import PaymentCard from "./PaymentCard";
import BiilingHistory from "./BiilingHistory";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col items-start md:items-start">
      <h1 className="font-bold text-2xl">Payment Method</h1>
      <p className="text-sm text-gray-400">
        Update your billing details and address.
      </p>
      <ContactCard />
      <PaymentCard />
      <BiilingHistory />
    </div>
  );
};

export default PaymentMethod;
