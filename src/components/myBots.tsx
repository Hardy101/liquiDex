import React, { useEffect, useRef } from "react";

import CreateNewBot from "./createNewBot";
import Table from "./table";
import BotsNavBar from "./botsNavbar";
import BotsHeading from "./botsHeading";

import gsap from "gsap";

interface Props {
  activeBotTab: boolean;
  activeTab: string;
  setActiveBotTab: (tab: boolean) => void;
  setActiveTab: (tab: string) => void;
}

const MyBots: React.FC<Props> = ({
  activeTab,
  activeBotTab,
  setActiveTab,
  setActiveBotTab,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeBotTab && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else if (!activeBotTab && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [activeBotTab]);
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
      icon: "fa-solid fa-magnifying-glass my-auto",
    },
  ];
  return (
    <>
      <div className="px-8 mt-8 grid gap-8 pb-8">
        <CreateNewBot
          ref={sidebarRef}
          activeBotTab={activeBotTab}
          setActiveBotTab={setActiveBotTab}
        />
        <BotsNavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          secnavbtn={secnavbtn}
        />
        <BotsHeading
          activeBotTab={activeBotTab}
          setActiveBotTab={setActiveBotTab}
        />
        <Table />
      </div>
    </>
  );
};

export default MyBots;
