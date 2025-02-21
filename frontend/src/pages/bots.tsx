import React, { useState } from "react";

import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import MyBots from "../components/myBots";
import BotsNavBar from "../components/botsNavbar";
import BotAnalytics from "../components/botsAnalytics";

const Bots: React.FC = () => {
  const [isBotSidebarActive, setIsBotSidebarActive] = useState(false);
  const [activeTab, setActiveTab] = useState("mybots");
  const secnavbtn = [
    {
      tab_id: "start",
      btn: "Quick Start Guide",
      icon: "fa-solid fa-bolt-lightning my-auto",
    },
    {
      tab_id: "mybots",
      btn: "My Bots",
      icon: "fa-solid fa-arrow-trend-up my-auto",
    },
    {
      tab_id: "backtesting",
      btn: "Backtesting",
      icon: "fa-solid fa-arrow-trend-up my-auto",
    },
    {
      tab_id: "analytics",
      btn: "Analytics",
      icon: "fa-solid fa-magnifying-glass-chart my-auto",
    },
  ];
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
        <div className="px-8 mt-8 grid gap-8 pb-8">
          <BotsNavBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            secnavbtn={secnavbtn}
          />
          {activeTab == "mybots" && (
            <MyBots
              activeTab={activeTab}
              isBotSidebarActive={isBotSidebarActive}
              setActiveTab={setActiveTab}
              setIsBotSidebarActive={setIsBotSidebarActive}
            />
          )}
          {activeTab == "analytics" && <BotAnalytics />}
        </div>
      </main>
    </>
  );
};

export default Bots;
