import React, { useState } from "react";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import SettingsNavbar from "../components/settingsNavbar";
import SettingsPlatform from "../components/settingsPlatform";
import SettingsAccount from "../components/settinsAccount";
import ComingSoon from "../components/comingSoon";
import useAuthRedirect from "../customHooks/useAuthRedirect";

const Settings: React.FC = () => {
  // useAuthRedirect();
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
          {activeTab == "security" && <ComingSoon />}
        </div>
      </main>
    </>
  );
};

export default Settings;
