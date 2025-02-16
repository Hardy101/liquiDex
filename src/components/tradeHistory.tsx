import React from "react";

const TradeHistory: React.FC = () => {
  const trade_types = [
    { type: "all_trades", txt: "All Trades", amnt: "57" },
    { type: "buy", txt: "Buy Side", amnt: "29" },
    { type: "sell", txt: "Sell Side", amnt: "28" },
  ];
  return (
    <div className=" text-light-1 text-xs grid gap-4">
      <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 flex justify-between gap-4">
        <h2 className="text-xl font-bold flex gap-4 grow">
          <span className="my-auto">Trade History</span>
          <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
            57 transactions
          </span>
        </h2>

        <form
          action="#"
          className="flex border border-grey-3 rounded-md pl-2 py-2 my-auto text-xs bg-dark-1 w-2/5"
        >
          <i className="lni lni-search-1 my-auto"></i>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="grow my-auto px-2 outline-none"
          />
        </form>
      </div>
      {/* Filter Trades */}
      <div>
        <form action="#" className="grid grid-cols-5 gap-4">
          <div className="">
            <input
              type="date"
              name=""
              id=""
              className="analytics-dashboard-select"
              placeholder="Select Date"
            />
          </div>
          <div>
            <select name="" id="" className="analytics-dashboard-select">
              <option value="#">Filter By Coin</option>
            </select>
          </div>
          <div>
            <select name="" id="" className="analytics-dashboard-select">
              <option value="#">Filter By Price</option>
            </select>
          </div>
          <div>
            <select name="" id="" className="analytics-dashboard-select">
              <option value="#">Filter By Price</option>
            </select>
          </div>
          <div>
            <select name="" id="" className="analytics-dashboard-select">
              <option value="#">Filter By Quantity</option>
            </select>
          </div>
        </form>
      </div>

      {/* Trades */}
      <ul className="flex gap-4 text-sm border-b pb-2 border-grey-4">
        {/* {asides_nav_link.map(({ icon, path, status }, index) => { */}
        {trade_types.map(({ txt, amnt }, index) => (
          <li className="flex gap-2">
            <span>{txt}</span>
            <span className="bg-light-1 rounded-md px-2 text-dark-1 text-xs my-auto">
              {amnt}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeHistory;
