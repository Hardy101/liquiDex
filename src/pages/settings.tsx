import React from "react";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";

const Settings: React.FC = () => {
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
      </main>
    </>
  );
};

export default Settings;
