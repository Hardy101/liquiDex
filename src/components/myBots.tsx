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
  return (
    <>
      <div className="px-8 mt-8 grid gap-8 pb-8">
        <CreateNewBot
          ref={sidebarRef}
          activeBotTab={activeBotTab}
          setActiveBotTab={setActiveBotTab}
        />
        <BotsNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
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
