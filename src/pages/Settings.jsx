import React from "react";
import { Heading } from "../components/Heading";
import SettingsTab from "../components/SettingsTab";
import PaymentMethod from "../components/PaymentMethod";

const Settings = () => {
  return (
    <div className="p-6 ">
      <Heading
        title="Settings"
        description="Manage your team and preferences here."
      />
      <SettingsTab />
      <section className="mt-6">
        <PaymentMethod />
      </section>
    </div>
  );
};

export default Settings;
