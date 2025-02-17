import { useRef, useEffect } from "react";
import CreateNewBot from "./createNewBot";
import BotsNavBar from "./botsNavbar";
import BotsHeading from "./botsHeading";
import Table from "./table";

import gsap from "gsap";

interface Props {
  activeBotTab: boolean;
  setActiveBotTab: (tab: boolean) => void;
}

const MyBotsSection: React.FC<Props> = ({ activeBotTab, setActiveBotTab }) => {
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
    </>
  );
};

export default MyBotsSection;
