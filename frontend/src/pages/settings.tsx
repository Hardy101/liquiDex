import React, { useState } from "react";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import SettingsNavbar from "../components/settingsNavbar";
import SettingsPlatform from "../components/settingsPlatform";
import SettingsAccount from "../components/settinsAccount";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("account");
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8">
          <SettingsNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab == "account" && <SettingsAccount />}
          {activeTab == "platform" && <SettingsPlatform />}
        </div>
      </main>
    </>
  );
};

export default Settings;
