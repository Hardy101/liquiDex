import React from "react";

const AnalyticsDashboard: React.FC = () => {
  return (
    <>
      <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs grid gap-4">
        <div className="flex justify-between gap-4">
          <h2 className="text-xl font-bold flex gap-4 grow">
            <span className="my-auto">Analytics Dashboard</span>
            <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
              33 bots
            </span>
          </h2>

          <form action="#" className="w-3/5 grid grid-cols-4 gap-4">
            <div className="">
              <select name="" id="" className="analytics-dashboard-select">
                <option value="#">MoonScalper</option>
              </select>
            </div>
            <div>
              <select name="" id="" className="analytics-dashboard-select">
                <option value="#">Filter by Access</option>
              </select>
            </div>
            <div>
              <select name="" id="" className="analytics-dashboard-select">
                <option value="#">1 Year</option>
              </select>
            </div>
            <div>
              <select name="" id="" className="analytics-dashboard-select">
                <option value="#">Binance</option>
              </select>
            </div>
          </form>
        </div>
        <div className="a-dashboard-info bg-dark-1 rounded-lg border border-grey-3 p-4 grid grid-cols-6 gap-4">
          <div className="my-auto">
            <p className="a-dashboard-info-p">
              <span className="text-grey-4 text-sm">Trade Number</span>
              <span className="text-sm font-bold">#12</span>
              <span className="text-grey-4">Sequence number</span>
            </p>
          </div>
          <div className="my-auto">
            <p className="a-dashboard-info a-dashboard-info-p">
              <span className="text-grey-4 text-sm">Net Profit/Loss</span>
              <span className="text-sm text-green-300 font-bold">
                3,222.33 ETH <i className="fa-solid fa-arrow-trend-up"></i>
              </span>
              <span className="text-green-300">+ 5.11%</span>
            </p>
          </div>
          <div className="my-auto">
            <p className="a-dashboard-info-p">
              <span className="text-grey-4 text-sm">Buy & Hold Return</span>
              <span className="text-sm text-green-300 font-bold">
                10,123.30 ETH
              </span>
              <span className="text-green-300">+ 10.5%</span>
            </p>
          </div>
          <div className="my-auto">
            <p className="a-dashboard-info-p">
              <span className="text-grey-4 text-sm">24h Low</span>
              <span className="text-sm font-bold">33,321.50 ETH</span>
              <span className="text-grey-4">24h low</span>
            </p>
          </div>
          <div className="my-auto">
            <p className="a-dashboard-info-p">
              <span className="text-grey-4 text-sm">24h Volume (ETH)</span>
              <span className="text-sm font-bold">14,457.69 ETH </span>
              <span className="text-grey-4">24h Volume (ETH)</span>
            </p>
          </div>
          <div className="my-auto">
            <p className="a-dashboard-info-p">
              <span className="text-grey-4 text-sm">Maximum Drawdown</span>
              <span className="text-sm text-red-400 font-bold">
                5,345.89 ETH <i className="fa-solid fa-arrow-trend-down"></i>
              </span>
              <span className="text-red-400">- 4.30%</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboard;
