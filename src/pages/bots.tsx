import React, { useState } from "react";

import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import MyBots from "../components/myBots";

const Bots: React.FC = () => {
  const [isBotSidebarActive, setIsBotSidebarActive] = useState(false);
  const [activeTab, setActiveTab] = useState("start");

  return (
    <>
      <AsidesSection />
      <main
        className="relative min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
          setIsBotSidebarActive(false);
        }}
      >
        <NavBar />
        <MyBots
          activeTab={activeTab}
          isBotSidebarActive={isBotSidebarActive}
          setActiveTab={setActiveTab}
          setIsBotSidebarActive={setIsBotSidebarActive}
        />
      </main>
    </>
  );
};

export default Bots;
