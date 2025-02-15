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
          <div className="sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3">
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
          <div className="flex justify-between gap-4 sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs">
            <h2 className="text-xl font-bold flex gap-4 grow">
              <span className="my-auto">My Bots</span>
              <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
                33 bots
              </span>
            </h2>

            <form
              action="#"
              className="flex border border-grey-3 bg-dark-1 rounded-md pl-2 py-1 my-auto"
            >
              <i className="lni lni-search-1 my-auto"></i>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for bots"
                className="grow my-auto px-2 outline-none"
              />
            </form>

            <form
              action="#"
              className="bg-dark-1 border border-grey-3 rounded-md px-2 py-1"
            >
              <select name="" id="" className="outline-none">
                <option value="#">Filter by Access</option>
              </select>
            </form>

            <button className="flex bg-light-1 gap-2 rounded-md pl-2 pr-3 py-1 text-black font-medium">
              <i className="lni lni-plus my-auto"></i>
              <span className="my-auto">Create new bot</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
