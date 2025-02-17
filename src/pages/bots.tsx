import React, { useState, useEffect, useRef } from "react";

import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import CreateNewBot from "../components/createNewBot";
import BotsNavBar from "../components/botsNavbar";
import BotsHeading from "../components/botsHeading";
import Table from "../components/table";

import gsap from "gsap";

const Bots: React.FC = () => {
  const [activeBotTab, setActiveBotTab] = useState(false);
  const [activeTab, setActiveTab] = useState("start");
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
      <AsidesSection />
      <main
        className="relative min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
          setActiveBotTab(false);
        }}
      >
        <NavBar />

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
      </main>
    </>
  );
};

export default Bots;
