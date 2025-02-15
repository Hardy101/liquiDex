import React from "react";
import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";

const Dashboard: React.FC = () => {
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
    <>
      <AsidesSection />
      <main className="w-full grow bg-dark-1">
        <NavBar />
        <div className="px-8 mt-8 grid gap-8 pb-8">
          <div className="sec-nav bg-dark-2 border border-grey-1 rounded-xl p-3">
            <ul className="navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-4 bg-dark-1">
              {secnavbtn.map(({ btn, icon }, index) => (
                <li key={index}>
                  <button
                    className={`sec-nav-btn ${
                      btn == "My Bots" ? "bg-light-1 text-black" : ""
                    }`}
                  >
                    <i className={icon}></i>
                    <span className="my-auto">{btn}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="sec-nav bg-dark-2 border border-grey-1 rounded-xl p-3 text-light-1">
            <h2 className="text-2xl font-bold">My Bots</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
