import React from "react";

import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import AnalyticsNavbar from "../components/analyticsNavbar";
import AnalyticsDashboard from "../components/analyticsDashboard";
import TradeHistory from "../components/tradeHistory";

const Analytics: React.FC = () => {
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8">
          <AnalyticsNavbar />
          <AnalyticsDashboard />
          <TradeHistory />
        </div>
      </main>
    </>
  );
};

export default Analytics;
