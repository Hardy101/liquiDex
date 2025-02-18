import React, { useEffect, useRef } from "react";

import CreateNewBot from "./createNewBot";
import Table from "./table";
import BotsNavBar from "./botsNavbar";
import BotsHeading from "./botsHeading";

import gsap from "gsap";

interface Props {
  isBotSidebarActive: boolean;
  activeTab: string;
  setIsBotSidebarActive: (tab: boolean) => void;
  setActiveTab: (tab: string) => void;
}

const MyBots: React.FC<Props> = ({
  activeTab,
  isBotSidebarActive,
  setActiveTab,
  setIsBotSidebarActive,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isBotSidebarActive && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else if (!isBotSidebarActive && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isBotSidebarActive]);
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
          isBotSidebarActive={isBotSidebarActive}
          setIsBotSidebarActive={setIsBotSidebarActive}
        />
        <BotsNavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          secnavbtn={secnavbtn}
        />
        <BotsHeading
          isBotSidebarActive={isBotSidebarActive}
          setIsBotSidebarActive={setIsBotSidebarActive}
        />
        <Table />
      </div>
    </>
  );
};

export default MyBots;
