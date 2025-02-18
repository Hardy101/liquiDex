import React, { useState } from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BotsNavBar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
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
    <div className="sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3">
      <ul className="navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-4 bg-dark-1 p-1">
        {secnavbtn.map(({ tab_id, btn, icon }, index) => (
          <li key={index}>
            <button
              className={`sec-nav-btn ${
                activeTab == tab_id ? "gradient-1 text-black" : ""
              }`}
              onClick={() => setActiveTab(tab_id)}
            >
              <i className={icon}></i>
              <span className="my-auto">{btn}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotsNavBar;
