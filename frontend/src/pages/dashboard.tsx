import React from "react";

import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import BotsNotifications from "../components/botsNotifications";


const Dashboard: React.FC = () => {
  // useAuthRedirect();
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8">
          <BotsNotifications />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
