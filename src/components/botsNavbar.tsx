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
      icon: "lni lni-bolt-2 my-auto",
    },
    {
      tab_id: "mybots",
      btn: "My Bots",
      icon: "lni lni-trend-up-1 my-auto",
    },
    {
      tab_id: "backtesting",
      btn: "Backtesting",
      icon: "lni lni-trend-up-1 my-auto",
    },
    {
      tab_id: "analytics",
      btn: "Analytics",
      icon: "lni lni-search-2 my-auto",
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
