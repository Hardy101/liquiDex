import React, { useState } from "react";

import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import MyBotsSection from "../components/myBots";

const Bots: React.FC = () => {
  const [activeBotTab, setActiveBotTab] = useState(false);
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
        <MyBotsSection
          activeBotTab={activeBotTab}
          setActiveBotTab={setActiveBotTab}
        />
      </main>
    </>
  );
};

export default Bots;
