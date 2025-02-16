import React from "react";

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="flex justify-between gap-4 sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs">
      <h2 className="text-xl font-bold flex gap-4 grow">
        <span className="my-auto">Analytics Dashboard</span>
        <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
          33 bots
        </span>
      </h2>

      <form action="#" className="w-3/5 grid grid-cols-4 gap-4">
        <div className="">
          <select name="" id="" className="analytics-dashboard">
            <option value="#">MoonScalper</option>
          </select>
        </div>
        <div>
          <select name="" id="" className="analytics-dashboard">
            <option value="#">Filter by Access</option>
          </select>
        </div>
        <div>
          <select name="" id="" className="analytics-dashboard">
            <option value="#">1 Year</option>
          </select>
        </div>
        <div>
          <select name="" id="" className="analytics-dashboard">
            <option value="#">Binance</option>
          </select>
        </div>
      </form>

      <div className="a-dashboard-info"></div>
    </div>
  );
};

export default AnalyticsDashboard;
