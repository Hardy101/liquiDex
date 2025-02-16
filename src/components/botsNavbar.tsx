import React from "react";
import Bots from "../pages/bots";

const BotsNavBar: React.FC = () => {
  const secnavbtn = [
    {
      btn: "Quick Start Guide",
      icon: "lni lni-bolt-2 my-auto",
      status: "not-active",
    },
    {
      btn: "My Bots",
      icon: "lni lni-trend-up-1 my-auto",
      status: "not-active",
    },
    {
      btn: "Backtesting",
      icon: "lni lni-trend-up-1 my-auto",
      status: "not-active",
    },
    {
      btn: "Analytics",
      icon: "lni lni-search-2 my-auto",
      status: "not-active",
    },
  ];
  return (
    <div className="sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3">
      <ul className="navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-4 bg-dark-1">
        {secnavbtn.map(({ btn, icon }, index) => (
          <li key={index}>
            <button
              className={`sec-nav-btn ${
                btn == "My Bots" ? "gradient-1 text-black" : ""
              }`}
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
