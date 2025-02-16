import React, { useState } from "react";

import AsidesSection from "../components/aside";
import BotsNavBar from "../components/botsNavbar";
import BotsHeading from "../components/botsHeading";
import CreateNewBot from "../components/createNewBot";
import NavBar from "../components/navbar";
import Table from "../components/table";

const Bots: React.FC = () => {
  const [activeBotTab, setActiveBotTab] = useState("");
  return (
    <>
      <AsidesSection />
      <main className="relative min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        {activeBotTab == "active" && <CreateNewBot />}
        <div className="px-8 mt-8 grid gap-8 pb-8" onClick={()=> setActiveBotTab('not-active')}>
          <BotsNavBar />
          <BotsHeading activeBotTab={activeBotTab} setActiveBotTab={setActiveBotTab}/>
        </div>
        <Table />
      </main>
    </>
  );
};

export default Bots;
