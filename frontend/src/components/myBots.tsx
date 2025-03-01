import React, { useEffect, useRef } from "react";

import CreateNewBot from "./minicomponents/createNewBot";
import Table from "./table";
import BotsHeading from "./botsHeading";

import gsap from "gsap";

interface Props {
  isBotSidebarActive: boolean;
  activeTab: string;
  setIsBotSidebarActive: (tab: boolean) => void;
  setActiveTab: (tab: string) => void;
}

const MyBots: React.FC<Props> = ({
  isBotSidebarActive,
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

  return (
    <>
      <CreateNewBot
        ref={sidebarRef}
        isSidebarActive={isBotSidebarActive}
        setIsSidebarActive={setIsBotSidebarActive}
      />

      <BotsHeading
        isBotSidebarActive={isBotSidebarActive}
        setIsBotSidebarActive={setIsBotSidebarActive}
      />
      <Table />
    </>
  );
};

export default MyBots;
