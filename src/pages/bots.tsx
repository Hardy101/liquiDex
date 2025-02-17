import React, { useState, useRef, useEffect, forwardRef } from "react";

import gsap from "gsap";

import AsidesSection from "../components/aside";
import BotsNavBar from "../components/botsNavbar";
import BotsHeading from "../components/botsHeading";
import CreateNewBot from "../components/createNewBot";
import NavBar from "../components/navbar";
import Table from "../components/table";

const Bots: React.FC = () => {
  const [activeBotTab, setActiveBotTab] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeBotTab && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: 0, // Slide in
        opacity: 1, // Make visible
        duration: 0.5,
        ease: "power3.out",
      });
    } else if (!activeBotTab && sidebarRef.current) {
      // GSAP animation when sidebar is closed
      gsap.to(sidebarRef.current, {
        x: "100%", // Slide out to the right
        opacity: 0, // Fade out
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
        <CreateNewBot
          ref={sidebarRef}
          activeBotTab={activeBotTab}
          setActiveBotTab={setActiveBotTab}
        />
        <div className="px-8 mt-8 grid gap-8 pb-8">
          <BotsNavBar />
          <BotsHeading
            activeBotTab={activeBotTab}
            setActiveBotTab={setActiveBotTab}
          />
        </div>
        <Table />
      </main>
    </>
  );
};

export default Bots;
