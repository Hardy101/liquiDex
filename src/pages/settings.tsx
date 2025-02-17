import React, { useState } from "react";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import SettingsNavbar from "../components/settingsNavbar";
import SettingsHeading from "../components/settingsHeading";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8">
          <SettingsNavbar />
          <SettingsHeading setActiveTab={setActiveTab} />
        </div>
      </main>
    </>
  );
};

export default Settings;
